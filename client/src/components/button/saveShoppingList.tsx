import { useAppDispatch } from '../../store/hooks';
import { saveShoppingList } from '../../api/service';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { organizeItemsFromState } from '../../utils/organizeItems';
import { saveShoppingContainer } from './button.style';
import CustomButton from './customButton';
import { updateError } from '../../store/shoppingSlice';

function SaveShoppingListButton() {
    const dispatch = useAppDispatch();
    const { shoppingList, loading } = useSelector((state: RootState) => state.shopping);

    const onSubmit = () => {
        const items = organizeItemsFromState(shoppingList);
        if (items.length === 0) {
            dispatch(updateError("לא נוספו פריטים עדיין לרשימה"))
            return;
        }
        dispatch(saveShoppingList(items));
    };

    return (
        <div style={saveShoppingContainer}>
            <CustomButton onSubmit={onSubmit} title="סיים הזמנה" loading={loading} />
        </div>
    );
}

export default SaveShoppingListButton;