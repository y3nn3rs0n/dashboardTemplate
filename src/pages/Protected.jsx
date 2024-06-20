import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/AuthContext";

export function Protected({children}){
    const {user} = useContext(Context);

    if (!user) {
        return <Navigate to= "/" replace></Navigate>
    } else{
        return children;
    }

}