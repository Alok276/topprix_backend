// src/Controllers/subscriptions/UpdateSubscription.ts
import { Request, Response } from "express";
import { prisma } from "../../Db/prismaDb";
import { stripe } from "../../config/stripe";
import { UserRole } from "../../../prisma/generated/prisma";

// Define a type that includes the fields we need from Stripe
interface StripeSubscriptionResponse {
  id: string;
  current_period_start: number;
  current_period_end: number;
  status: string;
  items: {
    data: Array<{
      id: string;
      price: {
        id: string;
      };
    }>;
  };
}

const UpdateSubscription = async (req: Request, res: Response) => {
  try {
    const { userId, newPricingPlanId } = req.body;

    if (!userId || !newPricingPlanId) {
      res.status(400).json({
        message: "Missing required fields: userId and newPricingPlanId are required"
      });
      return;
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscriptions: {
          where: {
            status: { in: ['ACTIVE', 'TRIALING'] }
          },
          orderBy: {
            createdAt: 'desc'
          },
          take: 1
        }
      }
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Check if user is a retailer
    if (user.role !== UserRole.RETAILER) {
      res.status(400).json({
        message: "Subscriptions are only available for retailers"
      });
      return;
    }

    if (user.subscriptions.length === 0) {
      res.status(404).json({ message: "No active subscription found for user" });
      return;
    }

    // Find the new pricing plan
    const newPlan = await prisma.pricingPlan.findUnique({
      where: { id: newPricingPlanId }
    });

    if (!newPlan) {
      res.status(404).json({ message: "New pricing plan not found" });
      return;
    }

    if (!newPlan.isActive) {
      res.status(400).json({ message: "Selected pricing plan is not active" });
      return;
    }

    const subscription = user.subscriptions[0];

    // Get the current Stripe subscription
    const stripeSubscriptionResponse = await stripe.subscriptions.retrieve(
      subscription.stripeSubscriptionId
    );

    // Cast to our custom type to ensure TypeScript recognizes the fields
    const stripeSubscription = stripeSubscriptionResponse as unknown as StripeSubscriptionResponse;

    // Get the subscription item ID (first item in the subscription)
    const subscriptionItemId = stripeSubscription.items.data[0]?.id;

    if (!subscriptionItemId) {
      res.status(500).json({ message: "Could not find subscription item" });
      return;
    }

    // Update the subscription in Stripe
    const updatedStripeSubscriptionResponse = await stripe.subscriptions.update(
      subscription.stripeSubscriptionId,
      {
        items: [{
          id: subscriptionItemId,
          price: newPlan.stripePriceId
        }],
        proration_behavior: 'create_prorations'
      }
    );

    // Cast to our custom type
    const updatedStripeSubscription = updatedStripeSubscriptionResponse as unknown as StripeSubscriptionResponse;

    // Calculate start date from Stripe response
    const currentPeriodStart = new Date(updatedStripeSubscription.current_period_start * 1000);

    // Calculate proper end date based on plan interval instead of using Stripe's end date
    let currentPeriodEnd = new Date(currentPeriodStart);

    // Make sure the date is valid before trying to modify it
    if (isNaN(currentPeriodEnd.getTime())) {
      // If date is invalid, use current date as fallback
      currentPeriodEnd = new Date();
      console.log('Warning: Invalid start date, using current date as fallback');
    }

    // Calculate the end date based on the interval
    switch (newPlan.interval.toLowerCase()) {
      case 'day':
        currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 1);
        break;
      case 'week':
        currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 7);
        break;
      case 'month':
        currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1);
        break;
      case 'year':
        currentPeriodEnd.setFullYear(currentPeriodEnd.getFullYear() + 1);
        break;
      default:
        // Fallback to 30 days if interval is unrecognized
        currentPeriodEnd.setDate(currentPeriodEnd.getDate() + 30);
        console.log('Warning: Unknown interval type, using 30 days as default');
    }

    console.log('Using calculated period end date:', currentPeriodEnd);

    // Update the subscription in the database
    const updatedSubscription = await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        pricingPlanId: newPlan.id,
        currentPeriodEnd
      },
      include: {
        pricingPlan: true
      }
    });

    // Update the user record
    await prisma.user.update({
      where: { id: userId },
      data: {
        pricingPlanId: newPlan.id,
        currentPeriodEnd
      }
    });

    // Record this as a payment/transaction
    await prisma.payment.create({
      data: {
        userId,
        amount: newPlan.amount,
        currency: newPlan.currency,
        stripePaymentId: `subscription_update_${subscription.id}`,
        paymentType: 'SUBSCRIPTION',
        status: 'succeeded',
        subscriptionId: subscription.id,
        metadata: {
          oldPlanId: subscription.pricingPlanId,
          newPlanId: newPlan.id,
          action: 'subscription_update'
        }
      }
    });

    res.status(200).json({
      message: "Subscription updated successfully",
      subscription: updatedSubscription,
      effectiveDate: currentPeriodStart
    });
    return;

  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({
      message: "An error occurred while updating the subscription",
      error: error instanceof Error ? error.message : "Unknown error"
    });
    return;
  }
};

export default UpdateSubscription;