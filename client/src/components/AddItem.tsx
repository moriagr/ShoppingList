import React, { useState } from 'react';
import { FormControl, MenuItem, Select, TextField, InputLabel } from '@mui/material';
import { Button } from '@mui/joy';

import './items.style.css'
import { useAppSelector } from '../store/hooks';

function AddItem() {

    const [productName, setProductName] = useState<string>("");
    const [category, setCategory] = useState<number | "">("");
    const stateCategories = useAppSelector(state => state.categories);
    const { loading, categories } = stateCategories;

    const onSubmit = () => {
        console.log(productName);
        console.log(category);
    }


    return (
        <div className="AddItem">
            <FormControl fullWidth sx={{ direction: "rtl" }}>
                <TextField
                    label="שם המוצר"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                    fullWidth />
            </FormControl>
            {categories?.length > 0 ?
                <FormControl fullWidth>
                    <InputLabel id="category-label">קטגוריה</InputLabel>

                    <Select
                        labelId="category-label"
                        required
                        label="קטגוריה"
                        sx={{ minWidth: 80 }}
                        value={category}
                        onChange={(e) => setCategory(e.target.value as number)}
                    >
                        {categories.map((category) => (

                            <MenuItem value={category._id} key={category._id} >{category.name}</MenuItem>
                        ))}
                    </Select>

                </FormControl>
                : <div>{loading}</div>}
            <Button type="submit" onClick={onSubmit}>הוסף</Button>
        </div>
    );
}

export default AddItem;
