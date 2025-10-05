import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth, provider } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';




export const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState(null);
    const [userdata,setUserdata]= useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

const logout = () =>{
    signOut(auth)
}

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(result.user)
                })
                
                return result;
            }).catch((error) => {
                const errorCode = error.code;
                alert(errorCode.message)
                throw error;
            });
    }

    const userInfo = {
        createUser,
        loginUser,
        googleLogin,
        user, setUser, loading,
        logout,
        userdata,setUserdata
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <>
         
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </>
    )
}
