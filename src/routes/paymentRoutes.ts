// src/routes/paymentRoutes.ts
import express from 'express';
import { getUserFromEmail } from '../middleware/checkRole';
import CreatePaymentIntent from '../Controllers/payments/CreatePaymentIntent';
import HandlePaymentSuccess from '../Controllers/payments/HandlePaymentSuccess';
import GetUserPayments from '../Controllers/payments/GetUserPayments';


const router = express.Router();

// Apply auth middleware for payment routes
router.use(getUserFromEmail);

// Payment Routes
router.post('/payment-intents', CreatePaymentIntent);
router.post('/payment-success', HandlePaymentSuccess);
router.get('/users/:userId/payments', GetUserPayments);

export default router;