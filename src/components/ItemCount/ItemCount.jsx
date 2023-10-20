import { useState } from "react";

const ItemCount = ({stock, addProduct}) =>{
    
    const [count, setCount] = useState (1);
    const handleSumar = () =>{
        if (count < stock) {
            setCount (count + 1);
        }
    };

    const handleRestar = () =>{
        if (count >= 1){
            setCount (count - 1)
        }
            
        
    }

    const add =() =>{
        addProduct (count)
        setCount (1)
    }

    return (
        <div>
            <div>
                <button onClick={handleSumar}> + </button>
                <p>{count}</p>
                <button onClick={handleRestar}> - </button>
            </div>
            <button onClick={add}>Agregar producto</button>
        </div>
    )
}
export default ItemCount