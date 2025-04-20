// src/routes/webhookRoutes.ts
import express from 'express';
import StripeWebhookHandler from '../Controllers/StripeWebhookHandler';


const router = express.Router();

// Stripe webhook route - needs raw body
router.post('/webhooks/stripe', express.raw({ type: 'application/json' }), StripeWebhookHandler);

export default router;