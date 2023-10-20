import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from 'react';
import { CartCtx } from '../../contexts/CartContext';

const ItemDetail = ({product}) => {
    console.log (product)

    const {addToCart} = useContext(CartCtx)
    const addProduct = (quantity) =>{
       const productCart ={
        image: product.imagen,
        name: product.nombre,
        price: product.precio,
        quantity: quantity
       }
       addToCart(productCart)
    }


        return (
                (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.imagen}/>
                        <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <Card.Text>{product.descripcion}</Card.Text>
                            <Card.Text>precio: ${product.precio}</Card.Text>
                            <ItemCount stock={10} addProduct={addProduct}/>
                        </Card.Body>
                    </Card>
                )
    )
}

export default ItemDetail;