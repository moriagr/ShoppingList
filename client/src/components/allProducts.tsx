import { useSelector } from 'react-redux';
import Card from './card';
import './card/card.style.css';
import { RootState } from '../store';
import NoProductAdded from './noProductAdded';
import { useLayoutEffect, useMemo, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { getGridTemplateColumns } from '../utils/responsiveGrid';

function AllProducts() {
    const stateCategories = useSelector((state: RootState) => state.categories);
    const { loading, categories } = stateCategories;
    const shoppingList = useSelector((state: RootState) => state.shopping.shoppingList);

    const [width, setWidth] = useState(window.innerWidth);

    const gridStyle = useMemo(() => ({
        gridTemplateColumns: getGridTemplateColumns(width)
    }), [width]);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <h2>יש לאסוף מוצרים אלו במחלקות המתאימות:</h2>

            {loading ?
                <Box sx={{ display: 'flex', margin: 'auto' }}>
                    <CircularProgress style={{ color: '#764ba2' }} />
                </Box> :
                categories?.length > 0 && Object.keys(shoppingList)?.length > 0 ?
                    <div className="cardContainer" style={gridStyle}>
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
