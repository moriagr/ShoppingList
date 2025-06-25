import { Button } from "@mui/material";
import { buttonStyle } from "./button.style";

interface buttonInterface {
    onSubmit: () => void;
    title: string
}
function CustomButton({ onSubmit, title }: buttonInterface) {
    return <Button type="submit" sx={buttonStyle} onClick={onSubmit}>{title}</Button>

}

export default CustomButton;