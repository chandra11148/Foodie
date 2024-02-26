import { Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Dashboard";
import { DashboardLayout } from "./layouts";
import { UILoader } from "./components/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      errorElement: <div>ErrorPage</div>,
    },
    {
      path:"/dashboard",
      element:<DashboardLayout/>,
      errorElement: <div>Error page 2</div>,
      children:[
        {
          path:'/dashboard',
          element: <Home/>
        }
      ]
    }
  ]);

  return (
    
      <div className="h-[100vh] w-[100vw]">
        <Suspense fallback={<UILoader/>}>
          <RouterProvider
            router={router}
            fallbackElement={<UILoader/>}
          />
        </Suspense>
      </div>
  );
}

export default App;
