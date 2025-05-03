// src/routes/subscriptionRoutes.ts
import express from 'express';
import { getUserFromEmail } from '../middleware/checkRole';
import { isAdminOrRetailer } from '../middleware/checkRole';
import CreateSubscription from '../Controllers/subscriptions/CreateSubscription';
import CancelSubscription from '../Controllers/subscriptions/CancelSubscription';
import GetUserSubscription from '../Controllers/subscriptions/GetUserSubscription';
import UpdateSubscription from '../Controllers/subscriptions/UpdateSubscription';
import HandleCheckoutSession from '../Controllers/subscriptions/HandleCheckoutSession';


const router = express.Router();

// Apply auth middleware for subscription routes
router.use(getUserFromEmail);
router.use(isAdminOrRetailer);

// Subscription Routes
router.post('/subscriptions', CreateSubscription);
router.post('/subscriptions/cancel', CancelSubscription);
router.get('/users/:userId/subscription', GetUserSubscription);
router.put('/subscriptions', UpdateSubscription);

router.post('/subscriptions/checkout/complete', HandleCheckoutSession);

export default router;