import './items.style.css'
interface ItemListProps {
    category: string;
}
function ItemList({ category }: ItemListProps) {
    return (
        <div className="ItemList">
            <h5>{category} - {} מוצרים</h5>

            
        </div>
    );
}

export default ItemList;
