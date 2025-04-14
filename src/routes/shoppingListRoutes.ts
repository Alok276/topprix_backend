import { Router } from 'express';
import AddShoppingListItem from "../Controllers/shoppingLists/AddShoppingListItem";
import CreateShoppingList from "../Controllers/shoppingLists/CreateShoppingList";
import DeleteShoppingListItem from "../Controllers/shoppingLists/DeleteShoppingListItem";

const router = Router();
import DeleteShoppingList from "../Controllers/shoppingLists/DeleteShoppingList";
import GetShoppingList from "../Controllers/shoppingLists/GetShoppingList";
import GetUserShoppingLists from "../Controllers/shoppingLists/GetUserShoppingLists";
import { getUserFromEmail } from "../middleware/checkRole";
import UpdateShoppingListItem from '../Controllers/shoppingLists/UpdateShoppingListItem';


// Apply auth middleware for all shopping list routes
router.use(getUserFromEmail);

// Shopping List Routes
router.post('/shopping-lists', CreateShoppingList);
router.get('/users/:userId/shopping-lists', GetUserShoppingLists);
router.get('/shopping-lists/:id', GetShoppingList);
router.delete('/shopping-lists/:id', DeleteShoppingList);

// Shopping List Items Routes
router.post('/shopping-lists/:shoppingListId/items', AddShoppingListItem);
router.put('/shopping-list-items/:id', UpdateShoppingListItem);
router.delete('/shopping-list-items/:id', DeleteShoppingListItem);

export default router;