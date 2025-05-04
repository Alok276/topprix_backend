// src/routes/pricingPlanRoutes.ts
import express from 'express';
import { getUserFromEmail } from '../middleware/checkRole';
import { isAdmin } from '../middleware/isAdmin';
import CreatePricingPlan from '../Controllers/pricingPlans/CreatePricingPlan';
import GetPricingPlans from '../Controllers/pricingPlans/GetPricingPlans';
import UpdatePricingPlan from '../Controllers/pricingPlans/UpdatePricingPlan';
import DeletePricingPlan from '../Controllers/pricingPlans/DeletePricingPlan';

const router = express.Router();

// Public route for getting pricing plans
router.get('/pricing-plans', GetPricingPlans);

// Admin-only routes for managing pricing plans
router.use(getUserFromEmail);
router.use(isAdmin);

router.post('/pricing-plans', CreatePricingPlan);
router.put('/pricing-plans/:id', UpdatePricingPlan);
router.delete('/pricing-plans/:id', DeletePricingPlan);

export default router;