import { createSlice } from '@reduxjs/toolkit';
import { Category, initialStateCategoriesType } from '../interface/interfaces';
import { fetchCategories } from '../api/service';


const categories: Category[] = [];

const initialState: initialStateCategoriesType = {
    categories,
    loading: false,
    error: null
}

const categoriesSlice = createSlice({
    name: 'categoriesList',
    initialState,
    reducers: {
        updateError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "קרתה תקלה בהבאת הקטגוריות מהשרת, אנא נסה שוב מאוחר יותר   ";
            })

    }
})

export const { updateError } = categoriesSlice.actions;

export default categoriesSlice.reducer;
