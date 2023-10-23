import { createContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword } from "firebase/auth"
import app from "../firebase/firbase.config";
import { useEffect } from "react";
import { useState } from "react";
const auth = getAuth(app)

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //email Password register
    const emailPasswordCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //email password login
    const emailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //updateProfile
    const userInfoUpdate = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }


    //signOut
    const logOut = () => {
        return signOut(auth)
    }

    //onAuthChanged

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        displayname: "Pastam",
        googleSignIn,
        user,
        logOut,
        emailPasswordCreateUser,
        emailPasswordSignIn,
        userInfoUpdate
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;