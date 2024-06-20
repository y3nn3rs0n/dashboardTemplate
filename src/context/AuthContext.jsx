import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const auth = getAuth();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribe;
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if (currentUser) setUser(currentUser);
            else setUser(null);
        });
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    const values = {
        user: user,
        setUser: setUser
    };
    console.log(user)
    return!loading? (
        
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    ) : null;
}