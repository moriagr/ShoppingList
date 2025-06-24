import { Button } from '@mui/joy';
import { useAppDispatch } from '../store/hooks';
import './items.style.css'
import { saveShoppingList } from '../api/service';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ItemInterface } from '../interface/itemInterface';

function SaveShoppingListButton() {
    const dispatch = useAppDispatch();
    const stateShoppingList = useSelector((state: RootState) => state.shopping);
    const { shoppingList } = stateShoppingList;


    const organizeArray = () => {
        const organizeItems: ItemInterface[] = [];
        Object.keys(shoppingList).forEach((category) => {
            const items = shoppingList[category].items
            Object.keys(items).forEach((item: string) => {
                const currItem = { name: item, quantity: items[item], category }
                console.log(currItem);
                organizeItems.push(currItem);
            })
            console.log("category: " + category);
        });
        return organizeItems;
    }
    const onSubmit = () => {
        const items = organizeArray();
        dispatch(saveShoppingList(items));
    }

    return (
        <div className="SaveShoppingListButton">

            <Button type="submit" onClick={onSubmit}>סיים הזמנה</Button>
        </div>
    );
}

export default SaveShoppingListButton;
