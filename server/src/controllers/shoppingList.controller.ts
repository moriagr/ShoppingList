import { Request, Response } from "express";
import ShoppingList from "../models/shoppingList.models";

export const saveShoppingList = async (
    req: Request,
    res: Response
): Promise<void> => {

    const { items } = req.body;
    const shoppingList = new ShoppingList({ items });
    await ShoppingList.create(shoppingList);
    res.status(200).json(shoppingList);
};
