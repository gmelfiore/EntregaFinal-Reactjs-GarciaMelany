import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ItemDetailPage, CartPage} from '../pages'

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
        path: '/cart',
        element: <CartPage/>
    }
   
])

const Navigation = () =>{
    return(
        <RouterProvider router= {routes}/>
    )
}

export default Navigation;