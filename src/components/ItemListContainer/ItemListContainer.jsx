import './styles.css'

const ItemListContainer = (props) => {
    return(
        <div className='saludo'>
            <h1>{props.greeting}</h1>
        </div>
    )
};

export default ItemListContainer;