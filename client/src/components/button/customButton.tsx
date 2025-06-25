import { Button } from "@mui/material";
import { buttonStyle } from "./button.style";

interface buttonInterface {
    onSubmit: () => void;
    title: string;
    loading: boolean
}
function CustomButton({ onSubmit, title, loading = false }: buttonInterface) {
    return <Button loading={loading} type="submit" sx={buttonStyle} onClick={onSubmit}>{title}</Button>

}

export default CustomButton;