import { Request, Response } from "express";
import prisma from "../db";

export const saveShoppingList = async (req: Request, res: Response): Promise<void> => {
  try {
    const { items } = req.body;
    const inserted = await prisma.shoppingList.create({
      data: {
        items,
      },
    });
    res.status(200).json(inserted);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save shopping list' });
  }
};
