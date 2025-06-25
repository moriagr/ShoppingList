import { useSelector } from 'react-redux';
import Card from './card/Card';
import './card/card.style.css';
import { RootState } from '../store';
import NoProductAdded from './noProductAdded/NoProductAdded';

function AllProducts() {
    const stateCategories = useSelector((state: RootState) => state.categories);
    const { loading, categories } = stateCategories;
    const shoppingList = useSelector((state: RootState) => state.shopping.shoppingList);

    return (
        <>
            <h2>יש לאסוף מוצרים אלו במחלקות המתאימות:</h2>

            {loading ?
                <div>טעינה</div> :
                categories?.length > 0 && Object.keys(shoppingList)?.length > 0 ?
                    <div className="cardContainer" style={{
                        gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(3, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
                    }}>
                        {categories.map((category, index) => {
                            if (category._id in shoppingList)
                                return <Card key={category._id} category={category} />
                            else
                                return undefined;
                        })}
                    </div>
                    : <NoProductAdded />}
        </>
    );
}

export default AllProducts;
