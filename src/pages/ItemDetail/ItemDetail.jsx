import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartCtx } from "../../contexts/CartContext";

const ItemDetail = () => {
    const {idProduct} = useParams ()
    const [product, setProduct] = useState ({})
    const [isLoading, setIsLoading] = useState (true)
    const {addToCart} = useContext (CartCtx)
    const searchProduct = productos.find ((prod) => prod.id === parseInt (idProduct))

    useEffect(() => {
        
        setTimeout(() => {
          setProduct(searchProduct);
          setIsLoading(false)
        }, 1000);
        }, [])


        return (
        <Layout>
            {
                isLoading 
                ? <p>Tejiendo ideas...</p>
                : (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.imgUrl}/>
                        <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <Card.Text>{product.descripcion}</Card.Text>
                            <Card.Text>{product.precio}</Card.Text>
                            <Button onClick={() => addToCart (product.id)}variant="primary">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </Layout>
    )
}

export default ItemDetail;