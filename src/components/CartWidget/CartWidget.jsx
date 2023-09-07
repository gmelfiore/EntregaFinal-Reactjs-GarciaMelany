import {BsCart} from 'react-icons/bs'
import './styles.css'

const CartWidget = () =>{
    return(
        <div className='cart'>
            <BsCart size={30} color={"white"}/>
            <p>(3)</p>
        </div>
    );
};

export default CartWidget;