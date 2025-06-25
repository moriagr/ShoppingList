import { useSelector } from 'react-redux';
import './components.style.css'
import { RootState } from '../store';

function TotalItems() {
    const totalItems = useSelector((state: RootState) => state.shopping.totalItems);

    return (
        <div className="totalItemsContainer">
            <span className="totalItems">
                סך הכל: {totalItems} מוצרים בסל
            </span>
        </div>

    );
}

export default TotalItems;
