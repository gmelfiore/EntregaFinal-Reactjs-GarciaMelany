import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../db/db";
import {doc, getDoc} from "firebase/firestore";

export const ItemDetailContainer = () =>{
    const [product, setProduct] = useState ({})
    const [isLoading, setIsLoading] = useState (true)
    const {idProduct} = useParams ()

    useEffect(()=>{
        const productRef = doc(db, "productos", idProduct)

        getDoc(productRef).then ((response)=> {
            if (response.exists()){
                const productData = {id: response.id, ...response.data()}
                setProduct({...productData})
                setIsLoading (false)
            }else{
                console.log("el producto no existe")
            }
        })
    }, [idProduct]);

    return (
        <div>
            {isLoading ? <div>Tejiendo ideas...</div> : <ItemDetail product = {product}/>}
        </div>
    )
}

