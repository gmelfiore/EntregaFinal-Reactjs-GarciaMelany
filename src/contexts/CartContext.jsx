import { createContext, useState } from "react";

export const CartCtx = createContext ()

const CartContext = ({children}) =>{
    const [cart, setCart] = useState ([])

    const addToCart = (product) => {
        if (isInCart (product.id)){

        }else{
            setCart([...cart, product])
        }
    }

    const isInCart = ()=>{
        return cart.some((product)=> product.id === id)
    }

    return (
        <CartCtx.Provider value= {{cart, addToCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext