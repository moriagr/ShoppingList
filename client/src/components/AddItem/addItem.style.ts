import { CSSProperties } from "@mui/material";

export const inputStyle: CSSProperties = {
    '& .MuiInputLabel-root': {
        right: '14px',
        top: '50%',
        transform: 'translateY(-50%)',
        transformOrigin: 'top right',
        textAlign: 'right',
        direction: 'rtl',
    },
    '& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiInputLabel-shrink': {
        right: 0,
        top: 0,
        transform: 'translate(-14px, -9px) scale(0.75)'
    },
    '& .css-1ll44ll-MuiOutlinedInput-notchedOutline': {
        textAlign: 'right'
    },
    '& .css-lohd6h-MuiSvgIcon-root-MuiSelect-icon, & .css-d551zc-MuiSvgIcon-root-MuiSelect-icon': {
        left: '7px',
        right: 'unset',
        position: 'relative'

    }
};
