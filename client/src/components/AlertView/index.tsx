import { Alert, AlertColor, Snackbar } from "@mui/material";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateError as updateErrorShopping, updateSuccess } from "../../store/shoppingSlice";
import { updateError } from "../../store/categoriesSlice";

interface SnackBarMessage {
    message: string;
    open: boolean;
    severity: AlertColor;
}

const originalValue: SnackBarMessage = {
    open: false,
    message: '',
    severity: 'info'
}

function AlertView() {
    const dispatch = useDispatch();
    const { error: shoppingErr, success: shoppingSuccess } = useSelector((state: RootState) => state.shopping);
    const { error: categoriesErr } = useSelector((state: RootState) => state.categories);

    const [message, setMessage] = useState<SnackBarMessage>(originalValue);

    const showSnackbar = (message: string, severity: AlertColor) => {
        setMessage({ open: true, message, severity });
    };

    useEffect(() => {
        if (shoppingErr) showSnackbar(shoppingErr, "error");
    }, [shoppingErr]);

    useEffect(() => {
        if (categoriesErr) showSnackbar(categoriesErr, "error");
    }, [categoriesErr]);

    useEffect(() => {
        if (shoppingSuccess) showSnackbar(shoppingSuccess, "success");
    }, [shoppingSuccess]);


    function handleClose() {
        if (shoppingErr) dispatch(updateErrorShopping(null));
        if (categoriesErr) dispatch(updateError());
        if (shoppingSuccess) dispatch(updateSuccess());
        setMessage(originalValue);
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={message.open}
            onClose={handleClose}>
            <Alert onClose={handleClose}
                severity={message.severity}
                variant="filled"
                sx={{ width: '100%' }}>
                {message.message}
            </Alert>
        </Snackbar>
    )
}

export default AlertView;