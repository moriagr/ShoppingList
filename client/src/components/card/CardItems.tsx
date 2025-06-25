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
        <div style={{
           
        }}>

            {/* Items list */}
            <div style={{
                ...(!isExpanded && hasMoreItems ? {
                    maxHeight: '256px',
                    overflowY: 'auto'
                } : {})
            }}>
                {visibleItems.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px',
                            borderRadius: '8px',
                            transition: 'background-color 0.2s ease',
                            marginBottom: '8px'
                        }}>


                        <span style={{
                            flex: 1,
                            color: '#1f2937',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            {item}
                            {itemsInCategory[item] > 1 && (
                                <span style={{
                                    padding: '2px 8px',
                                    backgroundColor: '#dbeafe',
                                    color: '#1e40af',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    borderRadius: '9999px'
                                }}>
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
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        width: '100%',
                        marginTop: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        color: '#2563eb',
                        backgroundColor: 'transparent',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                    }}>
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