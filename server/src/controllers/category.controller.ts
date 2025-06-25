import { Request, Response } from "express";
import prisma from "../db";

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
};
