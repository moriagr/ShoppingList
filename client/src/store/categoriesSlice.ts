import { createSlice } from '@reduxjs/toolkit';
import { Category, initialStateCategoriesType } from './interfaces';
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
    reducers: {},
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
                state.error = action.error.message ?? "Failed to fetch categories";
            })

    }
})

export default categoriesSlice.reducer;
