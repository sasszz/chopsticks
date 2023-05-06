import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NPCNPC from "./components/NPCNPC";
import HumanNPC from "./components/HumanNP2";
import HumanHuman from "./components/HumanHuman";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/npc/npc",
      element: <NPCNPC />,
      // errorElement: <NotFound />,
    },
    {
      path: "/human/npc",
      element: <HumanNPC />,
      // errorElement: <NotFound />,
    },
    {
      path: "/human/human",
      element: <HumanHuman />,
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
