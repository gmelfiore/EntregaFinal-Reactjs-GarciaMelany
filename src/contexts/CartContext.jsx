import { createContext, useState } from "react";

export const CartCtx = createContext ()

const CartContext = ({children}) =>{
    const [cart, setCart] = useState ([])

    const addToCart = (product) => {
        if (isInCart (product.id)){
            setCart (cart.map((item)=>{
                if (item.id === product.id){
                    return {...item, quantity: item.quantity + product.quantity}
                }else{
                    return item
                }
            }))
        }else{
            setCart([...cart, product])
        }
    }

    const isInCart = (id)=>{
        return cart.some((product)=> product.id === id)
    }

    return (
        <CartCtx.Provider value= {{cart, addToCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext