import './card.style.css';

function CardHeader({ title }: { title: string }) {
    return (
        <div className="headerContainer">
            <h3 className="headerTitle">
                {title}
            </h3>
        </div>)

}

export default CardHeader;