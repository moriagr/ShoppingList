import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.css'

function NoProductAdded() {
    return (
        <div className="container">
            <ShoppingCartIcon className="shoppingCartIcon"  sx={{ fontSize: 64 }}/>
            <div className='textNoProduct'>
                לא התווסף שום מוצר לעגלה, אנא הוסף מוצר
            </div>
        </div>
    )
}

export default NoProductAdded;