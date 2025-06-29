import { useSelector } from 'react-redux';
import './card.style.css';
import { RootState } from '../../store';
import CardItems from './CardItems';
import CardTitle from './CardTitle';
import { CardProps } from './Card.types';

function Card({ category }: CardProps) {
    const shoppingList = useSelector((state: RootState) => state.shopping.shoppingList);

    return (
        <div className="Card">
            <CardTitle title={`${category.name} - ${shoppingList[category.id].amount} מוצרים`} />
            <CardItems itemsInCategory={shoppingList[category.id].items} category={category.id} />
        </div>
    );
}

export default Card;
