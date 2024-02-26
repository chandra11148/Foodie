import { Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      errorElement: <div>ErrorPage</div>,
    },
  ]);

  return (
    
      <div className="container h-[100vh] w-[100vw]" style={{width:"100vw"}}>
        <Suspense fallback={<div>Loading</div>}>
          <RouterProvider
            router={router}
            fallbackElement={<div>Fallback Element</div>}
          />
        </Suspense>
      </div>
  );
}

export default App;
