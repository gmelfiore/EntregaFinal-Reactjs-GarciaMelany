import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './styles.css'
import logo from '../../../public/img/logo.png'



const Navbar = () =>{
    const navegacion = ['Mantitas', 'Accesorios', 'Cuidados', 'Tejiendo']
    return(
        <div className='navbar'>
            <div><img src={logo}/></div>
            <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
            <CartWidget/>
        </div>
    )
}

export default Navbar