import { useSelector } from 'react-redux';
import { Category } from '../../interface/interfaces';
import './card.style.css'
import { RootState } from '../../store';
import CardItems from './CardItems';
import { CardHeader } from '@mui/material';

interface CardProps {
    category: Category;
}

function Card({ category }: CardProps) {
    const stateShoppingList = useSelector((state: RootState) => state.shopping);
    const { shoppingList } = stateShoppingList;

    return (
        <div className="Card">
            <CardHeader title={`${category.name} - ${shoppingList[category._id].amount} מוצרים`}/>
            <CardItems itemsInCategory={shoppingList[category._id].items} />

        </div>
    );
}

export default Card;
