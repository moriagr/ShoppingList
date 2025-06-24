import { Request, Response } from "express";
import ShoppingList, { ShoppingListInterface } from "../models/shoppingList.models";

export const saveShoppingList = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

        const { items } = req.body;
        const shoppingList = new ShoppingList({ items });
        const inserted = await ShoppingList.insertMany(shoppingList);
        res.status(200).json(inserted);
    } catch (error) {
        res.status(500).json({ error });
    }
};
