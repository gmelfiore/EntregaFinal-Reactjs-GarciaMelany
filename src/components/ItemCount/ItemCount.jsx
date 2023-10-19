import { useState } from "react";

const ItemCount = ({stock, addToCart}) =>{
    const [count, setCount] = useState (1);
    const handleSumar = () =>{
        if (count < stock) {
            setCount (count + 1);
        }
    };

    const handleRestar = () =>{
        if (count > stock) {
            setCount (count - 1)
        }
    }

    const add =() =>{
        addToCart (count)
        setCount (1)
    }

    return (
        <div>
            <div>
                <p onClick={handleSumar}> + </p>
                <p>{count}</p>
                <p onClick={handleRestar}> - </p>
            </div>
            <div onClick={add}>Agregar producto</div>
        </div>
    )
}
export default ItemCount