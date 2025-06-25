import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import './card.style.css';
import { useDispatch } from 'react-redux';
import { updateItem } from '../../store/shoppingSlice';

interface itemsInterface {
    itemsInCategory: { [name: string]: number };
    category: string
}

const CardItems = ({ itemsInCategory, category }: itemsInterface) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxVisibleItems = 3;
    const visibleItems = isExpanded ? Object.keys(itemsInCategory) : Object.keys(itemsInCategory).slice(0, maxVisibleItems);
    const hasMoreItems = Object.keys(itemsInCategory).length > maxVisibleItems;
    const dispatch = useDispatch();

    const deleteItem = (itemId: string) => {
        dispatch(updateItem({ name: itemId, category }))
    };

    return (
        <div>

            {/* Items list */}
            <div className={!isExpanded && hasMoreItems ? "itemListContainer" : ""}>

                {visibleItems.map((item, index) => (
                    <div key={index} className="itemContainer">
                        <span className='item'>
                            {item}
                            {itemsInCategory[item] > 1 && (
                                <span className="times">
                                    x{itemsInCategory[item]}
                                </span>
                            )}

                        </span>
                        <button className="delete-btn" onClick={() => deleteItem(item)}                        >
                            <CloseIcon className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                {/* {visibleItems.length} */}
            </div>

            {hasMoreItems && (
                <button onClick={() => setIsExpanded(!isExpanded)} className="buttonHasMore">
                    {isExpanded ? (
                        <>
                            <ExpandLessIcon style={{ width: '16px', height: '16px' }} />
                            הראה פחות
                        </>
                    ) : (
                        <>
                            <ExpandMoreIcon style={{ width: '16px', height: '16px' }} />
                            הראה {Object.keys(itemsInCategory).length - maxVisibleItems} מוצרים יותר
                        </>
                    )}
                </button>
            )}

        </div>
    );
};

export default CardItems;