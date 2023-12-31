import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ItemDetailPage, CartPage, Checkout} from '../pages'
import CategoryPage from "../pages/Category/CategoryPage";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path:'/product/:idProduct',
        element: <ItemDetailPage /> 
    },
    {
        path: '/category/:idCategory',
        element: <CategoryPage/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    },
    {
        path: '/checkout',
        element: <Checkout/>
    }
   
])

const Navigation = () =>{
    return(
        <RouterProvider router= {routes}/>
    )
}

export default Navigation;