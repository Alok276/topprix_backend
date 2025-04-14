// src/Routes/wishlistRoutes.ts
import express from 'express';
import { getUserFromEmail } from '../middleware/checkRole';
;
import UpdateWishlistItem from '../Controllers/Wishlist/UpdateWishlistItem';
import AddToWishlist from '../Controllers/Wishlist/AddToWishlist';
import GetUserWishlist from '../Controllers/Wishlist/GetUserWishlist';
import DeleteFromWishlist from '../Controllers/Wishlist/DeleteFromWishlist';

const router = express.Router();

// Apply auth middleware for all wishlist routes
router.use(getUserFromEmail);

// Wishlist Routes
router.post('/users/:userId/wishlist', AddToWishlist);
router.get('/users/:userId/wishlist', GetUserWishlist);
router.put('/wishlist-items/:id', UpdateWishlistItem);
router.delete('/wishlist-items/:id', DeleteFromWishlist);

export default router;