import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider = ({children}) => {
const[user,setUser]=useState(null)
const[loading,setLoading]=useState(true)
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const profileUpdate=(name)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,
    })
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser)
    })
    return ()=>unsubscribe()
},[])

// context values
    const authInfo={
createUser,
login,
profileUpdate,
user,
loading,
logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;