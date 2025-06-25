import { CSSProperties } from "@mui/material";

export const buttonStyle: CSSProperties = {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '25px',
    fontWeight: 600,
    textTransform: 'none',
    minWidth: "150px",
    width: '40%',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
    }
};

export const AddButton: CSSProperties = {
    margin: 'unset'
}

export const saveShoppingContainer: CSSProperties = {
    width: "60%",
    margin: "2vh auto 10vh"
}