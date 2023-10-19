import CartWidget from '../CartWidget/CartWidget'
import './styles.css'
import { Link } from 'react-router-dom'



const Navbar = () =>{
    const navegacion = ['Hogar', 'Accesorios']
    return(
        <div className='navbar'>
            <Link to={'/'}><img src='https://firebasestorage.googleapis.com/v0/b/australis-tejidos-react.appspot.com/o/Australis%20transparente%20blanco.png?alt=media&token=39131cca-2456-4eb7-ae9c-6a3666b5d6c6&_gl=1*11adcq0*_ga*OTM0NzI0MTM0LjE2OTcwNzAyNjg.*_ga_CW55HF8NVT*MTY5NzY3MTY2Mi40LjEuMTY5NzY3MjI5OC42MC4wLjA.'/>
            </Link> 
            {navegacion.map ((url) => <Link className='navegacion' key= {url} to= {'/category/'+url}>{url}</Link>)}

            <Link to= {'/cart'}>
                <CartWidget/>
            </Link>
            
            
        </div>
    )
}

export default Navbar