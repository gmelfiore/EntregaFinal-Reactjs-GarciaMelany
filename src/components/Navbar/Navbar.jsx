import CartWidget from '../CartWidget/CartWidget'
import './styles.css'
import { Link } from 'react-router-dom'



const Navbar = () =>{
    const navegacion = ['Hogar', 'Accesorios']
    return(
        <div className='navbar'>
        <Link to={'/'}>Australis</Link> 
        {navegacion.map ((url) => <Link key= {url} to= {'/category/' + url}>{url}</Link>)}
        <Link to= {'/cart'}>
            <CartWidget/>
        </Link>
        
            
        </div>
    )
}

export default Navbar