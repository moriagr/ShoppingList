import { useSelector } from 'react-redux';
import Card from './card/Card';
import './card/card.style.css';
import { RootState } from '../store';
import NoProductAdded from './noProductAdded/NoProductAdded';
import { useEffect, useState } from 'react';

function AllProducts() {
    const stateCategories = useSelector((state: RootState) => state.categories);
    const { loading, categories } = stateCategories;
    const shoppingList = useSelector((state: RootState) => state.shopping.shoppingList);

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <h2>יש לאסוף מוצרים אלו במחלקות המתאימות:</h2>

            {loading ?
                <div>טעינה</div> :
                categories?.length > 0 && Object.keys(shoppingList)?.length > 0 ?
                    <div className="cardContainer" style={{
                        gridTemplateColumns: dimensions.width >= 1024 ? 'repeat(3, 1fr)' : dimensions.width >= 912 ? 'repeat(2, 1fr)' : '1fr',
                    }}>
                        {categories.map((category) => {
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
