import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hands2 from "./components/Hands-Bots";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/game",
      element: <Hands2 />,
      // errorElement: <NotFound />,
    },
    {
      path: "/",
      element: <Landing />,
      // errorElement: <NotFound />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
