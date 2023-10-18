import React, {useContext} from 'react'
import { CartCtx } from '../../contexts/CartContext'
import Layout from '../../components/Layout/Layout'

const Cart = ()=>{
    const {cart} = useContext (CartCtx)
    return (
        <Layout>
            {
            cart.length 
            ? <div>
                {
                    cart.map(productos => (
                        <h3>{productos.nombre}</h3>
                    ))
                }
            </div>
            : <h1>Tu carrito está vacío</h1>
        }
        </Layout>
        
        
        
    )
}

export default Cart