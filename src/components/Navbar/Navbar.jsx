import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './styles.css'
import { Link } from 'react-router-dom'



const Navbar = () =>{
    const navegacion = ['Mantitas', 'Accesorios', 'Cuidados', 'Tejiendo']
    return(
        <div className='navbar'>
           <Link to={'/'}>Australis</Link> 
           <ItemListContainer router={navegacion}/>
           <Link to= {'/cart'}>
            <CartWidget/>
            </Link>
        
            
        </div>
    )
}

export default Navbar