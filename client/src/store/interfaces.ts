export interface ShoppingItem {
    _id: number;
    name: string;
    category: number;
    quantity: number;
}

export interface Category {
    _id: number;
    name: string;
}

export interface ShoppingListInterface {
    items: ShoppingItem[];
    createdAt: Date;
}

export interface initialStateShoppingType {
    shoppingList: ShoppingItem[];
}

export interface initialStateCategoriesType {
    categories: Category[];
    loading: boolean;
    error: null | string;
}
