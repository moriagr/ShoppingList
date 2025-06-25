export interface ShoppingItem {
    name: string;
    category: string;
}

export interface Category {
    _id: string;
    name: string;
}

export interface ShoppingListInterface {
    [categoryId: string]: {
        amount: number;
        items: { [name: string]: number };
    };
}

export interface initialStateShoppingType {
    shoppingList: ShoppingListInterface;
    loading: boolean;
    error: null | string;
    success: null | string;
    totalItems: number;
}

export interface initialStateCategoriesType {
    categories: Category[];
    loading: boolean;
    error: null | string;
}

export interface ItemInterface {
    category: string;
    name: string;
    quantity: number;
}

export interface errorInterface {
    productErr: string,
    categoryErr: string
}

export interface CardProps {
    category: Category;
}