import './styles.css'

const ItemListContainer = ({router}) => {
    return(
        <div className='container'>
            {router.map((ruta) => (
            <p key={ruta}>{ruta}</p>
            ))}
        </div>
    )
};

export default ItemListContainer;