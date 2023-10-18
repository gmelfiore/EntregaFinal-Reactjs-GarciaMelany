import './styles.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList"
import {db} from "../../db/db";
import { getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);  
    const [isLoading, setIsLoading] = useState([]);
    const {idCategory} = useParams()

    useEffect(() =>{
        const productsRef = collection (db, "productos")
        const categoriaQ = idCategory && query(productsRef, where ("categoria", "==", idCategory))

        const queryRef = idCategory ? categoriaQ : productsRef

        getDocs (queryRef).then ((response)=>{
            const productsData = response.docs.map ((productDoc)=>(
            {
                id: productDoc.id,
                ... productDoc.data ()
            }
        ))
        
            setProducts (productsData)
            setIsLoading (false)
        })
    }, [idCategory]);
    console.log (products)
    return (
        <div>
            {isLoading ? <div>Tejiendo ideas ...</div> : <ItemList products = {products}/>}
        </div>
    )
};

export default ItemListContainer;