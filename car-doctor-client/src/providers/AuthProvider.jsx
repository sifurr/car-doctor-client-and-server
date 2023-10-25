import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
        
const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log("Current user: ", currentUser);
            setLoading(false);
        }) 
        return ()=> {
            unSubscribe();
        }
    }, [])

    const contents  = {
        user,
        loading,
        setUser,
        createUser,
        signIn
    };
    return (
        <AuthContext.Provider value={contents}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;