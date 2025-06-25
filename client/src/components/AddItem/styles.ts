import { SxProps, Theme } from '@mui/material';


// Stable RTL input styling that works across environments
export const inputStyle: SxProps<Theme> = {
    // Input Label positioning for RTL
    '& .MuiInputLabel-root': {
        right: 28,
        left: 'auto',
        transformOrigin: 'top right',
        textAlign: 'right',
        direction: 'rtl',
        // When focused or shrunk
        '&.MuiInputLabel-shrink': {
            transform: 'translate(-14px, -9px) scale(0.75)',
            right: 0,
        },
        '&.Mui-focused': {
            transform: 'translate(-14px, -9px) scale(0.75)',
            right: 0,
        },
    },

    // TextField input styling
    '& .MuiOutlinedInput-root': {
        '& input': {
            textAlign: 'right',
            direction: 'rtl',
        },
        // Outline border
        '& .MuiOutlinedInput-notchedOutline': {
            textAlign: 'right',
        },
    },

    // Select component styling
    '& .MuiSelect-select': {
        textAlign: 'right',
        direction: 'rtl',
    },

    // Select dropdown icon positioning
    '& .MuiSelect-icon': {
        left: 7,
        right: 'auto',
    },

    // Input adornments
    '& .MuiInputAdornment-root': {
        '&.MuiInputAdornment-positionStart': {
            marginRight: 0,
            marginLeft: 8,
        },
        '&.MuiInputAdornment-positionEnd': {
            marginLeft: 0,
            marginRight: 8,
        },
    },
};