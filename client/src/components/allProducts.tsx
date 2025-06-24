import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import './items.style.css'
import { RootState } from '../store';
function AllProducts() {
    const stateCategories = useSelector((state: RootState) => state.categories);
    const { loading, categories } = stateCategories;

    return (
        <>
            <h3>יש לאסוף מוצרים אלו במחלקות המתאימות</h3>
            {loading ?
                <div>loading</div> :
                categories?.length > 0 ?
                    categories.map((category, index) => <ItemList key={category._id} category={category.name} />) :
                    <div>no data</div>}
        </>
    );
}

export default AllProducts;
