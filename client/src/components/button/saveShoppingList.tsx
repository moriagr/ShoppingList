import { useAppDispatch } from '../../store/hooks';
import { saveShoppingList } from '../../api/service';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ItemInterface } from '../../interface/itemInterface';
import CustomButton from './customButton';

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
        });
        return organizeItems;
    }
    const onSubmit = () => {
        const items = organizeArray();
        dispatch(saveShoppingList(items));
    }

    return (
        <div style={{ width: "60%", margin: "2vh auto" }}>
            <CustomButton onSubmit={onSubmit} title="סיים הזמנה" />
        </div>
    );
}

export default SaveShoppingListButton;
