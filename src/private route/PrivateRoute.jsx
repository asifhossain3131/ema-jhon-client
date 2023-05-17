import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{loading,user}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <div>Loading</div>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/userlogin'></Navigate>
};

export default PrivateRoute;