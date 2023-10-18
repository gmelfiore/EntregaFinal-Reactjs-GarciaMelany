import { createContext, useState } from "react";

export const CartCtx = createContext ()

const CartContext = ({children}) =>{

    const [listProducts, setListProducts] = useState ([])

    const [cart, setCart] = useState ([])

    const addToCart = (idProduct) => {
        const findProduct = listProducts.find (product => product.id === idProduct)
        setCart ([...cart, findProduct])
    }

    return (
        <CartCtx.Provider value= {{listProducts, setListProducts, cart, setCart, addToCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext