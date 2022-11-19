import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../Firebase/Firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const reset = (auth, email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })


        return () => unSubscribe();
    },[])
    
    const authInfo = {
        createUser,
        signIn,
        google,
        updateUser,
        logOut,
        reset,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;