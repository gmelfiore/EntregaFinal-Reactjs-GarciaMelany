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

    const clear = ()=>{
        setCart ([])
    }

    const getCount = () =>{
        return cart.reduce ((acc, item) => acc + item.quantity, 0)
    }

    const precioTotal = () =>{
        return cart.reduce ((acc, item) => acc + item.quantity * item.price, 0)
    }

    const deleteItem =(id)=>{
        setCart (cart.filter((product)=> product.id !== id))
    }
    return (
        <CartCtx.Provider value= {{cart, addToCart, getCount, precioTotal, clear, deleteItem}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext