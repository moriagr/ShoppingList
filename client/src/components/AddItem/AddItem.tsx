import { useState } from 'react';
import { FormControl, MenuItem, Select, TextField, InputLabel, Alert, Snackbar, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './AddItem.style.css'
import { addNewItem } from '../../store/shoppingSlice';
import { inputStyle } from './addItem.style'
import CustomButton from '../button/customButton';

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

    const onSubmit = () => {
        if (productName === "" || category === "") {
            if (productName === "" && category === "") {
                setError({ productErr: "   לא בחרת שום מוצר עדיין, נסה שוב", categoryErr: "   לא בחרת שום קטגורייה עדיין, נסה שוב" });
            }
            else if (productName === "")
                setError({ productErr: "   לא בחרת שום מוצר עדיין, נסה שוב", categoryErr: "" });
            else {
                setError({ productErr: "", categoryErr: "   לא בחרת שום קטגורייה עדיין, נסה שוב" });
            }
            return;
        }
        dispatch(addNewItem({ category: category, name: productName }))
    }

    return (
        <div className="AddItem">
            <FormControl fullWidth>
                <TextField
                    label="שם המוצר"
                    value={productName}
                    error={(error.productErr !== "")}
                    helperText={(error.productErr !== "") ? error.productErr : " "}
                    required
                    sx={inputStyle}
                    onChange={(event) => {
                        setProductName(event.target.value)
                        setError((prevValue) => { return { ...prevValue, productErr: "" } })
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
                            setError((prevValue) => { return { ...prevValue, categoryErr: "" } })
                        }}
                    >
                        {categories.map((category) => (
                            <MenuItem value={category._id} key={category._id} >{category.name}</MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                : <CircularProgress style={{ color: '#764ba2' }} />}
            <span className="spaceBetween"></span>

            <CustomButton onSubmit={onSubmit} title="הוסף" loading={false} />
        </div>
    );
}

export default AddItem;
