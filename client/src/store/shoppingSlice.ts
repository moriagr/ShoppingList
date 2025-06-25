import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveShoppingList } from '../api/service';
import { initialStateShoppingType, ShoppingItem } from '../types';


const shoppingList = {};

const initialState: initialStateShoppingType = {
    shoppingList,
    loading: false,
    error: "",
    success: "",
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
        },
        updateError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        updateSuccess: (state) => {
            state.success = null;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(saveShoppingList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveShoppingList.fulfilled, (state, action) => {
                state.loading = false;
                state.success = "הרשימה נשמרה בהצלחה   ";
            })
            .addCase(saveShoppingList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "לא ניתן לשמור את רשימת הקניות, נסה שוב מאוחר יותר   ";
            })

    }

})

export const { addNewItem, updateItem, clearList, updateError, updateSuccess } = shoppingSlice.actions;


export default shoppingSlice.reducer;