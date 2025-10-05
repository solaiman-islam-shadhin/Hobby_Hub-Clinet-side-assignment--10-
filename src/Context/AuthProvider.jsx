import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth, provider } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';


export const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);;


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                toast.success("Google SignIn Successfull");
                
              
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(result.user)
                })



            }).catch((error) => {

                const errorCode = error.code;
                alert(errorCode.message)
            });

    }

    const userInfo = {
        createUser,
        loginUser,
        googleLogin,
        user, setUser
    }

    return (

        <>
            <ToastContainer />
            <AuthContext value={userInfo}>
                {
                    children
                }
            </AuthContext>
        </>
    )
}
