import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/public/home/Home";
import Shop from "../pages/public/shop/Shop";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<Shop></Shop>,
                loader:()=>fetch('http://localhost:5000/totalProducts')
            }
        ]
    }
])

export default router