import { Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <div>Landing Page</div>,
      errorElement: <div>ErrorPage</div>,
    },
  ]);

  return (
    <>
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <RouterProvider
            router={router}
            fallbackElement={<div>Fallback Element</div>}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;
