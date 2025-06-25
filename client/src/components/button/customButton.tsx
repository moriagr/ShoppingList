import { Button } from '@mui/material';
import { buttonStyle } from './button.style';
import { ButtonProps } from './Button.types';

function customButton({ onSubmit, title, loading = false }: ButtonProps) {
    return (
        <Button type="submit" sx={buttonStyle} onClick={onSubmit} disabled={loading}>
            {loading ? 'טוען...' : title}
        </Button>
    );
}

export default customButton;