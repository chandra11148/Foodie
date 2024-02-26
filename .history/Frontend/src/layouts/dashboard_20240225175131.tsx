import { useContext, useLayoutEffect } from "react";
import { AuthenticationContext } from "../context";
import { AUTH_TYPE } from "../@types";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
            <div className="h-[60px] md:h-[80px] bg-zinc-900 flex items-center justify-between px-3 sticky top-0 z-50">
                <div className="flex items-center">
                    <h2 className="text-white font-bold text-xl underline-offset-4 underline">
                        <NavLink to="/dashboard">Foodie</NavLink>
                    </h2>
                    <span className="text-orange-700 font-extrabold text-xl pl-2">.</span>
                </div>
            </div>
        </div>
    );
};