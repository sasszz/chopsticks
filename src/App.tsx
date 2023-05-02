import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hands from "./components/Hands";

function App() {
  return (
    <div className="App bg-dark-brown overflow-hidden">
      <h1 className="text-3xl text-light-pink font-comfortaa">Chopsticks</h1>
      <Hands />
    </div>
  );
}

export default App;
