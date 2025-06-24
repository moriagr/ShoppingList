import { useSelector } from 'react-redux';
import { Category } from '../interface/interfaces';
import './items.style.css'
import { RootState } from '../store';
interface ItemListProps {
    category: Category;
}
function ItemList({ category }: ItemListProps) {
    const stateShoppingList = useSelector((state: RootState) => state.shopping);
    const { shoppingList } = stateShoppingList;

    const showAllItems = () => {
        const items = shoppingList[category._id].items;

        return <div>{Object.keys(items).map((key) => <div style={{display:'flex', flexDirection:"row"}}>{key} X {items[key]}</div>)}</div>
    }

    // showAllItems();
    return (
        <div className="ItemList">
            <h5>{category.name} - {shoppingList[category._id].amount} מוצרים</h5>
            { showAllItems()}

        </div>
    );
}

export default ItemList;
