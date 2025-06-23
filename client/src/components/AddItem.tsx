import React, { useState } from 'react';
import { FormControl, Input, Stack, MenuItem, Select, TextField, InputLabel } from '@mui/material';
import { Option, Button } from '@mui/joy';

import './items.style.css'

const categories = [{ name: "מוצרי ניקיון", id: 0 }, { name: "גבינות", id: 1 }, { name: "ירקות ופירות", id: 2 }, { name: "בשר ודגים", id: 3 }, { name: "מאפים", id: 4 }]

function AddItem() {
    const [productName, setProductName] = useState<string>("");
    const [category, setCategory] = useState<number | "">("");

    const onSubmit = () => {
        console.log(productName);
        console.log(category);
    }


    return (
        <div className="AddItem">
            <FormControl fullWidth sx={{direction:"rtl"}}>
                <TextField
                    label="שם המוצר"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                    fullWidth />
            </FormControl>
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

                        <MenuItem value={category.id} key={category.id} >{category.name}</MenuItem>
                    ))}
                </Select>

            </FormControl>
            <Button type="submit" onClick={onSubmit}>הוסף</Button>
        </div>
    );
}

export default AddItem;
