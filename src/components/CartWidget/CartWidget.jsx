import {BsCart} from 'react-icons/bs'
import './styles.css'
import {CartCtx} from '../../contexts/CartContext';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';


const CartWidget = () =>{
    const {getCount} = useContext (CartCtx)
    return(
        <div className='cart' style={{background: "blueViolet"}}>
            <BsCart size={30} color={"white"}/>
           {getCount() > 0 && <Badge>{getCount()}</Badge>}
        </div>
    );
};

export default CartWidget;