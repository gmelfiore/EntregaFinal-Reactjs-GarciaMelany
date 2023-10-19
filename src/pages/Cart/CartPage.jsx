import React, {useContext} from 'react'
import { CartCtx } from '../../contexts/CartContext'
import Layout from '../../components/Layout/Layout'

import Cart from "../../components/Cart/Cart"
const CartPage = ()=>{
    return (
        <Layout>
           <Cart/>
        </Layout>  
        
    )
}

export default CartPage