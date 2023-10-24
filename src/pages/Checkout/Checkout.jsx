import { useContext, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { CartCtx } from "../../contexts/CartContext"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { db } from "../../db/db"
import { Link } from "react-router-dom"

const Checkout = ()=>{
    const [user, setUser]= useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState ('')
    const {cart,precioTotal,clear} = useContext(CartCtx)
    const userDatos = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name && !user.phone){
            alert('Es obligatorio llenar los campos')
        }else{
            let order = {
                user,
                item: cart,
                total: precioTotal(),
                date: serverTimestamp()

            }
            const ventas = collection (db, "orders")
            addDoc (ventas, order)
            .then ((res)=> {
                setOrderId(res.id)
                clear()
            })
            .catch ((error) => console.log (error))

        }
            
        
    }
        return(
        <Layout>
            <div>
                {orderId !== ''
                ? <div>
                <h1>Orden generada con éxito</h1>
                <h3>Su número de orden es: {orderId}</h3>
                <Link to='/'><button>Volver al inicio</button></Link>
                </div>
                : <div>
                <h2>Terminar compra</h2>
                <h5>Ingrese sus datos para realizar la orden</h5>
                <form onSubmit={finalizarCompra}>
                    <div>
                        <label>Nombre y apellido</label>
                        <input onChange= {userDatos} type="text" placeholder="Nombre y apellido" name="name" required/>
                    </div>
                    <div>
                        <label>Número de teléfono</label>
                        <input onChange= {userDatos} type="number" placeholder="+5491165248633" name="phone"/>
                    </div>
                    <div>
                        <label>Ingrese su e-mail</label>
                        <input onChange= {userDatos} type="email" placeholder="hahgsja@ckjhnskj.com" name="mail"/>
                    </div>
                    <div>
                        <label>Repita su e-mail</label>
                        <input onChange={((e)=> setValidateEmail(e.target.value))} type="email" placeholder="hahgsja@ckjhnskj.com" name="mail"/>
                    </div>
                     <button type="submit" disabled={validateEmail !== user.mail}>Confirmar orden</button>
                 </form>   
                </div>
                }
            </div>
        </Layout>
        
    )
}

export default Checkout