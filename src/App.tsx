import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hands from "./components/Hands";
import Hands2 from "./components/Hands-Bots";

function App() {
  return (
    <div className="App overflow-hidden">
      <h1 className="mt-5 text-3xl text-light-pink font-comfortaa">
        Chopsticks
      </h1>
      <Hands2 />
    </div>
  );
}

export default App;
