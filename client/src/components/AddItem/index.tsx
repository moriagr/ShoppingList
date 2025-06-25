import { useState } from 'react';
import { FormControl, MenuItem, TextField, CircularProgress, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './styles.css'
import { addNewItem } from '../../store/shoppingSlice';
import { inputStyle } from './styles'
import CustomButton from '../Button/customButton';

interface errorInterface {
    productErr: string,
    categoryErr: string
}

function AddItem() {

    const [productName, setProductName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [error, setError] = useState<errorInterface>({ productErr: "", categoryErr: "" });
    const stateCategories = useAppSelector(state => state.categories);
    const { loading, categories } = stateCategories;

    const dispatch = useAppDispatch();

    const validate = (): boolean => {
        const productErr = productName.trim() === "" ? "לא בחרת שום מוצר עדיין, נסה שוב" : "";
        const categoryErr = category === "" ? "לא בחרת שום קטגוריה עדיין, נסה שוב" : "";

        setError({ productErr, categoryErr });

        return !(productErr || categoryErr);
    };

    const onSubmit = () => {
        if (!validate()) return;
        dispatch(addNewItem({ category: category, name: productName }))
    }

    const clearError = (key: keyof errorInterface) =>
        setError((prev) => ({ ...prev, [key]: "" }));

    return (
        <div className="AddItem">
            <FormControl className='input' fullWidth>
                <TextField
                    label="שם המוצר"
                    value={productName}
                    error={(error.productErr !== "")}
                    helperText={(error.productErr !== "") ? error.productErr : " "}
                    required
                    sx={inputStyle}
                    onChange={(event) => {
                        setProductName(event.target.value)
                        clearError("productErr")
                    }}
                    fullWidth
                />
            </FormControl>
            <span className="spaceBetween"></span>
            {!loading && categories?.length > 0 ?
                <FormControl fullWidth required sx={inputStyle}>
                    <TextField
                        select
                        error={(error.categoryErr !== "")}
                        helperText={(error.categoryErr !== "") ? error.categoryErr : " "}

                        required
                        label="קטגוריה"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                            clearError("categoryErr")
                        }}
                    >
                        {categories.map((category) => (
                            <MenuItem value={category.id} key={category.id} >{category.name}</MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                :
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress style={{ color: '#764ba2' }} />
                </Box>}
            <span className="spaceBetween"></span>

            <CustomButton onSubmit={onSubmit} title="הוסף" loading={false} />
        </div>
    );
}

export default AddItem;
