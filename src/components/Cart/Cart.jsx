import { useContext } from "react"
import { CartCtx } from "../../contexts/CartContext"
import Layout from "../Layout/Layout"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Cart = ()=>{
    const {cart, clear, precioTotal, deleteItem} = useContext(CartCtx);
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
                        <Button onClick={()=> deleteItem(product.id)}>X</Button>
                    </Card>
                    ))
                } <p>Total a pagar: ${precioTotal()}</p>
                <button onClick={clear}>Vaciar carrito</button>
                <Link to={'/checkout'}><button>Finalizar compra</button></Link>
            </div> )
            : <div>
                <h1>Tu carrito está vacío</h1>
                <Link to={'/'}><button>Ir a comprar</button></Link>
            </div>
        }
        </Layout>
        
    )
    
}

export default Cart