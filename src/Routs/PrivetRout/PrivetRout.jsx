import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);
    if(loading){
        return <div className="flex item-center justify-center mt-72"><span className="text-center loading loading-spinner w-40"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to ="/login"></Navigate>;
};

export default PrivetRout;