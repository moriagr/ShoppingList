import { useState } from 'react';
import { FormControl, MenuItem, Select, TextField, InputLabel, Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './AddItem.style.css'
import { addNewItem } from '../../store/shoppingSlice';
import { inputStyle } from './addItem.style'
import CustomButton from '../button/customButton';

function AddItem() {

    const [productName, setProductName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [error, setError] = useState<string>("");
    const stateCategories = useAppSelector(state => state.categories);
    const { loading, categories } = stateCategories;

    const dispatch = useAppDispatch();

    const onSubmit = () => {
        if (productName === "") {
            setError("   לא בחרת שום מוצר עדיין, נסה שוב")
            return;
        }
        if (category === "") {
            setError("   לא בחרת שום קטגורייה עדיין, נסה שוב")
            return;
        }
        dispatch(addNewItem({ category: category, name: productName }))
    }

    function handleClose() {
        setError("");
    }

    return (
        <div className="AddItem">
            <FormControl fullWidth>
                <TextField
                    label="שם המוצר"
                    value={productName}
                    required
                    sx={inputStyle}
                    onChange={(event) => {
                        setProductName(event.target.value)
                        setError("")
                    }}
                    fullWidth
                />
            </FormControl>
            <span className="spaceBetween"></span>
            {categories?.length > 0 ?
                <FormControl fullWidth required sx={inputStyle}>
                    <InputLabel id="category-label">קטגוריה</InputLabel>

                    <Select
                        labelId="category-label"
                        required
                        label="קטגוריה"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                            setError("")
                        }}
                    >
                        {categories.map((category) => (
                            <MenuItem value={category._id} key={category._id} >{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                : <div>{loading}</div>}
            <span className="spaceBetween"></span>

            <CustomButton onSubmit={onSubmit} title="הוסף" />
            {error ?
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={(error !== "")}
                    onClose={handleClose}>
                    <Alert onClose={handleClose}
                        severity="error"
                        variant="filled"
                        sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
                : null}
        </div>
    );
}

export default AddItem;
