import { useContext } from "react"
import { CartCtx } from "../../contexts/CartContext"
import Layout from "../Layout/Layout"
import { Card } from "react-bootstrap"

const Cart = ()=>{
    const {cart} = useContext(CartCtx);
    console.log (cart)
    return(
        <Layout>
            { cart.length ? 
            (<div>
                {
                    cart.map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image}/>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>precio por unidad: ${product.price}</Card.Text>
                            <Card.Text>Cantidad: {product.quantity}</Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                }
            </div> )
            : <h1>Tu carrito está vacío</h1>
        }
        </Layout>
        
    )
    
}

export default Cart