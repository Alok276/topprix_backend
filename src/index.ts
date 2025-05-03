import express, { Express } from "express";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import RegisterUser from "./Controllers/Users/RegisterUser";
import GetUser from "./Controllers/Users/GetUser";
import UpdateUser from "./Controllers/Users/UpdateUser";
import DeleteUser from "./Controllers/Users/DeleteUser";
import CreateStore from "./Controllers/stores/CreateStore";
import GetStore from "./Controllers/stores/GetStore";
import DeleteStore from "./Controllers/stores/DeleteStore";
import UpdateStore from "./Controllers/stores/UpdateStore";
import GetStoresFilters from "./Controllers/stores/GetStoreFilters";
import { getUserFromEmail, isAdminOrRetailer } from "./middleware/checkRole";
import { isAdmin } from "./middleware/isAdmin";
import GetCategories from "./Controllers/categories/GetCategory";
import CreateCategory from "./Controllers/categories/CreateCategory";
import GetCategoriesID from "./Controllers/categories/GetCategoriesID";
import CreateFlyer from "./Controllers/flyers/CreateFlyer";
import GetFlyers from "./Controllers/flyers/GetFlyers";
import SaveFlyer from "./Controllers/flyers/SaveFlyer";
import AddFlyerItem from "./Controllers/flyers/AddFlyerItem";
import GetFlyerByID from "./Controllers/flyers/GetFlyerByID";
import DeleteFlyer from "./Controllers/flyers/DeleteFlyer";
import DeleteFlyerItem from "./Controllers/flyers/DeleteFlyerItem";
import CreateCoupon from "./Controllers/coupons/CreateCoupon";
import GetCoupons from "./Controllers/coupons/GetCoupons";
import UpdateCoupon from "./Controllers/coupons/UpdateCoupon";
import DeleteCoupon from "./Controllers/coupons/DeleteCoupon";
import SaveCoupon from "./Controllers/coupons/SaveCoupon";
import UnsaveCoupon from "./Controllers/coupons/UnsaveCoupon";
import GetUserCoupons from "./Controllers/coupons/GetUserCoupons";
import GetCouponsByID from "./Controllers/coupons/GetCouponsByID";
import { ensureStoreOwnership } from "./middleware/ensureStoreOwnership";
import GetCouponByID from "./Controllers/coupons/GetCouponsByID";
import AddPreferredStore from "./Controllers/Users/Preferences/AddPreferredStore";
import RemovePreferredStore from "./Controllers/Users/Preferences/RemovePreferredStore";
import AddPreferredCategory from "./Controllers/Users/Preferences/AddPreferredCategory";
import RemovePreferredCategory from "./Controllers/Users/Preferences/RemovePreferredCategory";
import GetPreferredStores from "./Controllers/Users/Preferences/GetPreferredStores";
import GetPreferredCategories from "./Controllers/Users/Preferences/GetPreferredCategories";
import shoppingListRoutes from "./routes/shoppingListRoutes";
import wishlistRoutes from "./routes/wishlistRoutes";
import GetNearbyStores from "./Controllers/location/GetNearbyStores";
import GetNearbyDeals from "./Controllers/location/GetNearbyDeals";
import paymentRoutes from "./routes/paymentRoutes";
import subscriptionRoutes from "./routes/subscriptionRoutes";
import pricingPlanRoutes from "./routes/pricingPlanRoutes";
import webhookRoutes from "./routes/webhookRoutes";
import StripeWebhookHandler from "./Controllers/webhooks/StripeWebhookHandler";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;

if (!SESSION_SECRET_KEY) {
  throw new Error("Missing SESSION_SECRET_KEY. Check the .env file.");
}

app.use(cors({ credentials: true, origin: "" }));

app.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.post('/api/webhooks/stripe',
  express.raw({ type: 'application/json' }),
  StripeWebhookHandler
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Dive in the World of branding");
});


//USER APIS CALLS
app.post("/register", RegisterUser);
//app.get('/user', GetUser);
app.get('/user/:email', GetUser);
app.post("/user/update/:email", UpdateUser);
app.delete("/user/delete/:email", DeleteUser);


//store calls
app.get("/store/:id", GetStore);
app.get("/stores", GetStoresFilters);

// Protected store endpoints (admin & retailer)
app.post("/store", isAdminOrRetailer, CreateStore);
app.put("/store/:id", isAdminOrRetailer, UpdateStore);

// Admin-only endpoint
app.delete("/store/:id", isAdmin, DeleteStore);


// CATEGORY APIS
// Public category endpoints
app.get("/category/:id", GetCategoriesID);
app.get("/categories", GetCategories);

// Protected category endpoints
app.post("/category", isAdminOrRetailer, CreateCategory);


// FLYER API ROUTES
app.post("/flyers", CreateFlyer);
app.get("/flyers", GetFlyers);
app.get("/flyers/:id", GetFlyerByID);
app.post("/flyers/save", SaveFlyer);
app.post("/flyers/items", AddFlyerItem);
app.delete("/flyers/:id", DeleteFlyer);
app.delete("/flyers/items/:id", DeleteFlyerItem);

// COUPON API ROUTES
//save user coupons
app.post("/coupons/save", getUserFromEmail, SaveCoupon);
//unsave user coupons
app.post("/coupons/unsave", getUserFromEmail, UnsaveCoupon);
//get user coupons
app.get("/users/:userId/coupons", getUserFromEmail, GetUserCoupons);

// Routes requiring admin or retailer role
//get all the coupons with filters
app.get("/coupons", GetCoupons);
app.get("/coupons/:id", GetCouponByID);
//create call
app.post("/coupons", getUserFromEmail, isAdminOrRetailer, ensureStoreOwnership, CreateCoupon);
//update call
app.put("/coupons/:id", getUserFromEmail, isAdminOrRetailer, ensureStoreOwnership, UpdateCoupon);
//Delete call
app.delete("/coupons/:id", getUserFromEmail, isAdminOrRetailer, ensureStoreOwnership, DeleteCoupon);


// User Preferences Routes
app.post("/user/:email/preferred-stores/add", AddPreferredStore);
app.post("/user/:email/preferred-stores/remove", RemovePreferredStore);
app.post("/user/:email/preferred-categories/add", AddPreferredCategory);
app.post("/user/:email/preferred-categories/remove", RemovePreferredCategory);
app.get("/user/:email/preferred-stores", GetPreferredStores);
app.get("/user/:email/preferred-categories", GetPreferredCategories);

// Add these lines where you register routes
app.use('/api', shoppingListRoutes);
app.use('/api', wishlistRoutes);

// Location-based API Routes
app.get("/location/nearby-stores", GetNearbyStores);
app.get("/location/nearby-deals", GetNearbyDeals);


// Add new routes
app.use('/api', paymentRoutes);
app.use('/api', subscriptionRoutes);
app.use('/api', pricingPlanRoutes);
app.use('/api', webhookRoutes);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
