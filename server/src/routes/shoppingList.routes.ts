import { Router } from "express";
import { saveShoppingList } from "../controllers/shoppingList.controller";

const router = Router();

router.post('/', saveShoppingList);

export default router;