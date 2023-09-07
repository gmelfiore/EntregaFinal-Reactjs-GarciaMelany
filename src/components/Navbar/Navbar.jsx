import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './styles.css'
import logo from '../../../public/img/logo.png'


const Navbar = () =>{
    return(
        <div className='navbar'>
            <div><img src={logo}/></div>
            <div className='container'>
               <p>Mantitas</p>
               <p>Accesorios</p>
               <p>Cuidados</p>
               <p>Tejiendo</p>
            </div>
            <CartWidget/>
        </div>
    )
}

export default Navbar