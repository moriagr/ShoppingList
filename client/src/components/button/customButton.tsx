import { Button } from '@mui/material';
import { buttonStyle } from './button.style';
import { ButtonProps } from './Button.types';

function CustomButton({ onSubmit, title, loading = false }: ButtonProps) {
    return (
        <Button type="submit" sx={buttonStyle} onClick={onSubmit} disabled={loading}>
            {loading ? 'טוען...' : title}
        </Button>
    );
}

export default CustomButton;