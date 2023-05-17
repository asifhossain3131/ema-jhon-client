import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/public/home/Home";
import Shop from "../pages/public/shop/Shop";
import UserLogin from "../pages/public/login/user/UserLogin";
import UserRegistration from "../pages/public/login/user/UserRegistration";
import OrderReview from "../pages/private/order review/OrderReview";
import PrivateRoute from "../private route/PrivateRoute";


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
            },
            {
                path:'/userlogin',
                element:<UserLogin></UserLogin>
            },
            {
                path:'/userregistration',
                element:<UserRegistration></UserRegistration>
            },
            {
                path:'/reviews',
                element:<PrivateRoute><OrderReview></OrderReview></PrivateRoute>
            }
        ]
    }
])

export default router