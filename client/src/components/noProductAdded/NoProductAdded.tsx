import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NoProductAdded.style.css'

function NoProductAdded() {
    return (
        <div className="container">
            <ShoppingCartIcon className="shoppingCartIcon" />
            <div className='textNoProduct'>
                לא התווסף שום מוצר לעגלה, אנא הוסף מוצר
            </div>
        </div>
    )
}

export default NoProductAdded;