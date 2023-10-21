import { useState } from "react"
import Layout from "../../components/Layout/Layout"

const Checkout = ()=>{
    const [user, setUser]= useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const userDatos = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
    }
        return(
        <Layout>
            <div>
                <h2>Terminar compra</h2>
                <h5>Ingrese sus datos para realizar la orden</h5>
                <form onSubmit={finalizarCompra}>
                    <div>
                        <label>Nombre y apellido</label>
                        <input onChange= {userDatos} type="text" placeholder="Nombre y apellido" name="name"/>
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
                     <button type="submit" disabled={validateEmail !== user.email}>Confirmar orden</button>
                 </form>   

            </div>
        </Layout>
        
    )
}

export default Checkout