import React from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthProvider = ({ children }) => {
const createUser = (email,password) => {
return createUserWithEmailAndPassword(auth, email, password);
}
const loginUser = (email,password) => {
return signInWithEmailAndPassword(auth, email, password);}


const userInfo ={
    createUser,
    loginUser
}

    return (
        <AuthContext value={ userInfo }>
            {
                children
            }
        </AuthContext>
    )
}
