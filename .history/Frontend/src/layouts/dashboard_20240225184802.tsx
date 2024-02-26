import { useContext, useLayoutEffect } from "react";
import { AuthenticationContext } from "../context";
import { AUTH_TYPE } from "../@types";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "../components";

const routes = [
  { name: "Home", to: "/dashboard" },
  { name: "Add Recipe", to: "/dashboard/addrecipe" },
  { name: "My Recipes", to: "/dashboard/myrecipe" },
];

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const pathname = useParams().pathname;
  useLayoutEffect(() => {
    if (!sessionStorage.getItem("email") && !sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
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
      <div className="flex flex-col md:flex-row w-full h-full z-10 relative">
        <div className="hidden md:block bg-zinc-900 h-full w-[20%] fixed">
          <div className="md:flex gap-8 items-start w-full p-3">
            <img
              className="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="A image"
            />
            <div>
              <p className="text-orange-500 font-light">Shekhar</p>
            </div>
          </div>
          <div className="flex flex-col gap-y- mt-3">
          {routes.map(({ name, to }) => (
            <NavLink
              key={name + to}
              to={to}
              className={({ isActive }) =>
                isActive && pathname === to
                  ? "text-white font-thin text-sm bg-orange-500 p-4"
                  : "text-white font-thin text-sm hover:bg-orange-500 p-4"
              }
            >
              {name}
            </NavLink>
          ))}
          <Button
            title="Logout"
            handleClick={onLogout}
            className="text-white font-thin text-sm text-left hover:bg-orange-500 p-4"
          />
          </div>
        </div>
        
      </div>
    </div>
  );
};