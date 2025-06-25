import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import './card.style.css';
import { useDispatch } from 'react-redux';
import { updateItem } from '../../store/shoppingSlice';
import { CardItemsProps } from './Card.types';


const CardItems = ({ itemsInCategory, category }: CardItemsProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxVisibleItems = 3;
    const itemKeys = Object.keys(itemsInCategory);

    const visibleItems = isExpanded ? itemKeys : itemKeys.slice(0, maxVisibleItems);
    const hasMoreItems = itemKeys.length > maxVisibleItems;
    const dispatch = useDispatch();

    const deleteItem = (itemId: string) => {
        dispatch(updateItem({ name: itemId, category }))
    };

    return (
        <div>
            <div className={!isExpanded && hasMoreItems ? "itemListContainer" : ""}>

                {visibleItems.map((item, index) => (
                    <div key={index} className="itemContainer">
                        <span className='item'>
                            {item}
                            {itemsInCategory[item] > 1 && (
                                <span className="times">x{itemsInCategory[item]}</span>
                            )}

                        </span>
                        <button className="delete-btn" onClick={() => deleteItem(item)}                        >
                            <CloseIcon sx={{ fontSize: 30 }} />
                        </button>
                    </div>
                ))}
            </div>

            {hasMoreItems && (
                <button onClick={() => setIsExpanded(!isExpanded)} className="buttonHasMore">
                    {isExpanded ? (
                        <>
                            <ExpandLessIcon style={{ width: 16, height: 16 }} />
                            הראה פחות
                        </>
                    ) : (
                        <>
                            <ExpandMoreIcon style={{ width: 16, height: 16 }} />
                            הראה {Object.keys(itemsInCategory).length - maxVisibleItems} מוצרים יותר
                        </>
                    )}
                </button>
            )}

        </div>
    );
};

export default CardItems;