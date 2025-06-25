import './card.style.css';
import { CardTitleProps } from './Card.types';

function CardTitle({ title }: CardTitleProps) {
    return (
        <div className="headerContainer">
            <h3 className="headerTitle">{title}</h3>
        </div>
    );
}

export default CardTitle