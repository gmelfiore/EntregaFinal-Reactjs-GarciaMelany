import { createContext, useState } from "react";

export const CartCtx = createContext ()

const CartContext = ({children}) =>{
    const [cart, setCart] = useState ([])

    const addToCart = (product) => {
        if (isInCart (product.id)){
            const products= cart.map((item)=>{
                if (item.id === product.id){
                    return {...item, quantity: item.quantity + product.quantity}
                }else{
                    return item
                }
            })
            setCart ([...products]);
        }else{
            setCart([...cart, product])
        }
    }

    const isInCart = (id)=>{
        return cart.some((product)=> product.id === id)
    }

    const getCount = () =>{
        return cart.reduce ((total, product) => total + product.quantity, 0)
    }

    const precioTotal = () =>{
        return cart.reduce ((total, product) => total + product.quantity * product.precio, 0)
    }
    return (
        <CartCtx.Provider value= {{cart, addToCart, getCount, precioTotal}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext