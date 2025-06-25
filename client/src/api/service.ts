import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from './axiosInstance';
import { ItemInterface } from '../types';

export const fetchCategories = createAsyncThunk(
    '/categories/fetchCategories', async () => {
        const response = await Axios.get('/categories');
        return response.data;
    }
);

export const saveShoppingList = createAsyncThunk(
    '/shopping-list/saveShoppingList', async (items: ItemInterface[]) => {
        const response = await Axios.post('/shopping-list', { items });
        return response.data;
    }
);