import { useContext, useLayoutEffect } from "react";
import { AuthenticationContext } from "../context";
import { AUTH_TYPE } from "../@types";
import { useNavigate } from "react-router-dom";

const routes = [
    {name:"Home", to: "/dashboard" },
    {name:"Add Recipe",to: "/dashboard/addrecipe" },
    { name:"My Recipes", to: "/dashboard/myrecipe" },
];


export const DashboardLayout = () => {
    const navigate = useNavigate();
    useLayoutEffect(()=>{
        if(!sessionStorage.getItem('email') && !sessionStorage.getItem('token') ){
            navigate('/');
        }
    },[]);
    const { onLogout, loading } = useContext(AuthenticationContext) as AUTH_TYPE;
    return (
        <div className="w-full h-full bg-black overflow-x-hidden">
            
        </div>
    );
};