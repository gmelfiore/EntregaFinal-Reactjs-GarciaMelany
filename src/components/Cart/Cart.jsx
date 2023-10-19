const Cart = ()=>{
    const {cart} = useContext (CartCtx)
    return(
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
    )
    
}