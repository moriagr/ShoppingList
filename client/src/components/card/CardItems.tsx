import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import './card.style.css';

interface itemsInterface {
    itemsInCategory: { [name: string]: number }
}

const CardItems = ({ itemsInCategory }: itemsInterface) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxVisibleItems = 5;
    const visibleItems = isExpanded ? Object.keys(itemsInCategory) : Object.keys(itemsInCategory).slice(0, maxVisibleItems);
    const hasMoreItems = Object.keys(itemsInCategory).length > maxVisibleItems;


    // const deleteItem = (itemId) => {
    //     onUpdate(card.id, {
    //         ...card,
    //         items: card.items.filter(item => item.id !== itemId)
    //     });
    // };

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
                        {/* <button
                            className="delete-btn"
                            // onClick={() => deleteItem(item.id)}
                            style={{
                                opacity: 1,
                                color: '#f87171',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                borderRadius: '4px',
                                transition: 'all 0.2s ease'
                            }}
                        // onMouseEnter={(e) => e.target.opacity =1}
                        // onMouseLeave={(e) => e.target.style.color = '#f87171'}
                        >
                            <CloseIcon className="w-4 h-4" />
                        </button> */}
                    </div>
                ))}
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