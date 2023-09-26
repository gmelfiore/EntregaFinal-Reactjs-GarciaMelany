import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage, ItemDetailPage} from '../pages/index'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path:'/product/:idProduct',
        element: <ItemDetailPage /> 
    },
   
])

const Navigation = () =>{
    return(
        <RouterProvider router= {routes}/>
    )
}

export default Navigation;