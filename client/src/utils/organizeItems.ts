import { ItemInterface, ShoppingListInterface } from "../types";

export const organizeItemsFromState = (shoppingList: ShoppingListInterface): ItemInterface[] => {
    const result: ItemInterface[] = [];
    Object.keys(shoppingList).forEach((category) => {
        const items = shoppingList[category].items;
        Object.keys(items).forEach((item) => {
            result.push({ name: item, quantity: items[item], category });
        });
    });
    return result;
};