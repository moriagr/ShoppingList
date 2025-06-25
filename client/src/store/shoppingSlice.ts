import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateShoppingType, ShoppingItem } from '../interface/interfaces';
import { saveShoppingList } from '../api/service';


const shoppingList = {};

const initialState: initialStateShoppingType = {
    shoppingList,
    loading: false,
    error: "",
    totalItems: 0,
}

const shoppingSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addNewItem: (state, action: PayloadAction<ShoppingItem>) => {
            const item = action.payload;
            const itemName = item.name.trimEnd();
            const categoryId = item.category;
            if (!(categoryId in state.shoppingList)) {
                state.shoppingList[categoryId] = { items: { [itemName]: 1 }, amount: 1 };
            } else {
                const currentItems = state.shoppingList[categoryId].items;
                if (!(itemName in currentItems)) {
                    currentItems[itemName] = 1;
                } else {
                    currentItems[itemName] = currentItems[itemName] + 1;
                }
                state.shoppingList[categoryId].amount = state.shoppingList[categoryId].amount + 1;
            }
            state.totalItems += 1;
        },
        clearList: (state) => {
            state.shoppingList = {};
        },
        updateItem: (state, action: PayloadAction<ShoppingItem>) => {
            const currentItem = state.shoppingList[action.payload.category].items[action.payload.name];
            state.totalItems -= currentItem;
            state.shoppingList[action.payload.category].amount -= currentItem;
            if (state.shoppingList[action.payload.category].amount <= 0) {
                delete state.shoppingList[action.payload.category]
            } else delete state.shoppingList[action.payload.category].items[action.payload.name];
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(saveShoppingList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveShoppingList.fulfilled, (state, action) => {
                state.loading = false;
                // state.categories = action.payload;
            })
            .addCase(saveShoppingList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch categories";
            })

    }

})

export const { addNewItem, updateItem, clearList } = shoppingSlice.actions;


export default shoppingSlice.reducer;