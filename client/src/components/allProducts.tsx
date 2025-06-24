import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import './items.style.css'
import { RootState } from '../store';
function AllProducts() {
    const stateCategories = useSelector((state: RootState) => state.categories);
    const { loading, categories } = stateCategories;
    const stateShoppingList = useSelector((state: RootState) => state.shopping);
    const { shoppingList } = stateShoppingList;

    return (
        <>
            <h3>יש לאסוף מוצרים אלו במחלקות המתאימות</h3>
            {loading ?
                <div>loading</div> :
                categories?.length > 0 ?
                    categories.map((category, index) => {
                        if (category._id in shoppingList)
                            return <ItemList key={category._id} category={category} />
                    }) :
                    <div>no data</div>}
        </>
    );
}

export default AllProducts;
