import {BsCart} from 'react-icons/bs'
import './styles.css'
import {CartCtx} from '../../contexts/CartContext';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';

const CartWidget = () =>{
    const {cart} = useContext (CartCtx)
    return(
        <div className='cart'>
            <Badge bg='secondary'>{cart.length}
                <BsCart size={30} color={"white"}/>
            </Badge>
        </div>
    );
};

export default CartWidget;