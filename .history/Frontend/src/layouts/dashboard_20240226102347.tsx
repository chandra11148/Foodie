import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context";
import { AUTH_TYPE } from "../@types";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "../components";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const routes = [
  { name: "Home", to: "/dashboard" },
  { name: "Add Recipe", to: "/dashboard/addrecipe" },
  { name: "My Recipes", to: "/dashboard/myrecipe" },
];

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  useEffect(() => {
    if (!sessionStorage.getItem("email") && !sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const { onLogout, loading, user } = useContext(AuthenticationContext) as AUTH_TYPE;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="w-full h-full bg-black overflow-x-hidden">
      <div className="h-[60px] md:h-[80px] bg-zinc-900 flex items-center justify-between px-3 sticky top-0 z-50">
        <div className="flex items-center">
          <h2 className="text-white font-bold text-xl underline-offset-4 underline">
            <NavLink to="/dashboard">Foodie</NavLink>
          </h2>
          <span className="text-orange-700 font-extrabold text-xl pl-2">.</span>
        </div>
        {/* {MENUBAR} */}
        <div className="text-white md:hidden">
          {isOpen ? (
            <MdOutlineClose onClick={handleIsOpen} />
          ) : (
            <FiMenu onClick={handleIsOpen} />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full z-10 relative">
        <div className="hidden md:block bg-zinc-900 h-full w-[20%] fixed">
          <div className="md:flex gap-4 items-center items-start w-full p-3">
            <img
              className="h-10 w-10 object-cover rounded-full"
            //   src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1708878170~exp=1708878770~hmac=2b5b8f887edec9ea5d1c2ebeb985ae3ad9c91d24b518f43c05937433e92d728f"
                alt="A image"
            />
            <div>
              <p className="text-orange-500 font-light">{ user }</p>
            </div>
          </div>
          <div className="flex flex-col gap-y- mt-3">
            {routes.map(({ name, to }) => (
              <NavLink
                key={name + to}
                to={to}
                className={({ isActive }) =>
                  isActive && pathname === to
                    ? "text-white text-sm bg-orange-500 p-4"
                    : "text-white text-sm hover:bg-orange-500 p-4"
                }
              >
                {name}
              </NavLink>
            ))}
            <Button
              title="Logout"
              handleClick={onLogout}
              className="text-white text-sm text-left hover:bg-orange-500 p-4"
            />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-zinc-800 w-full h-full top-0 absolute md:relative">
            <div className="flex gap-8 items-start w-full p-3">
              <img
                className="w-10 h-10 rounded-3xl"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <div>
                <p className="text-orange-500 font-light">{user}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1  mt-3">
              {routes.map(({ name, to }) => (
                <NavLink
                  key={name + to}
                  to={to}
                  onClick={handleIsOpen}
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
        )}
        <div className="md:w-[80%] p3 md:px-8 md:py-6 w-full h-full md:ml-[16rem]">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};
