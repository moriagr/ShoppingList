import { Request, Response } from "express";
import Category from "../models/category.models";

export const getCategories = async (
    req: Request,
    res: Response
): Promise<void> => {
    const categories = await Category.find();
    res.json(categories);
};
