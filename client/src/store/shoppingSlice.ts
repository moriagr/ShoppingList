import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, initialStateShoppingType, ShoppingItem } from './interfaces';


const shoppingList: ShoppingItem[] = [];

const initialState: initialStateShoppingType = {
    shoppingList
}

const shoppingSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addNewItem: (state, action: PayloadAction<ShoppingItem>) => {
            const item = action.payload;
            state.shoppingList.push(item);
        },
        updateItem: (state, action: PayloadAction<ShoppingItem>) => {
            const item = action.payload;
            state.shoppingList.push(action.payload);
        }

    }
})

export const { addNewItem, updateItem } = shoppingSlice.actions;


export default shoppingSlice.reducer;