import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from './axiosInstance';
import { item } from './itemInterface';

export const fetchCategories = createAsyncThunk(
    '/categories/fetchCategories', async () => {
        const response = await Axios.get('/categories');
        return response.data;
    }
);

export const saveShoppingList = createAsyncThunk(
    '', async (items: item[]) => {
        const response = await Axios.post('/categories', { items });
        return response.data;
    }
);