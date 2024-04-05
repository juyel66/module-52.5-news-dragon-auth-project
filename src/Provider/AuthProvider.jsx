import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const  AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user create
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    // login/ signIn 
    const signInUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signOut
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('user in auth state changed',currentUser)
            setUser(currentUser)
            setLoading(false)

        });
        return () =>{
            unSubscribe();
        } 

    },[])


    // constText
    const authInfo={
        user,
        createUser,
        logOut,
        signInUser,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children: PropTypes.node
}