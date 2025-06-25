import { useState } from 'react';
import { FormControl, MenuItem, Select, TextField, InputLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './AddItem.style.css'
import { addNewItem } from '../../store/shoppingSlice';
import { inputStyle } from './addItem.style'
import CustomButton from '../button/customButton';

function AddItem() {

    const [productName, setProductName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const stateCategories = useAppSelector(state => state.categories);
    const { loading, categories } = stateCategories;

    const dispatch = useAppDispatch();

    const onSubmit = () => {
        console.log(productName);
        console.log(typeof category);
        dispatch(addNewItem({ category: category, name: productName }))
    }

    return (
        <div className="AddItem">
            <FormControl fullWidth>
                <TextField
                    label="שם המוצר"
                    value={productName}
                    sx={inputStyle}
                    onChange={(event) => setProductName(event.target.value)}
                    fullWidth
                />
            </FormControl>
            <span className="spaceBetween"></span>
            {categories?.length > 0 ?
                <FormControl fullWidth sx={inputStyle}>
                    <InputLabel id="category-label">קטגוריה</InputLabel>

                    <Select
                        labelId="category-label"
                        required
                        label="קטגוריה"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <MenuItem value={category._id} key={category._id} >{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                : <div>{loading}</div>}
            <span className="spaceBetween"></span>

            <CustomButton onSubmit={onSubmit} title="הוסף" />
        </div>
    );
}

export default AddItem;
