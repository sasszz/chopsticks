import React from "react";
import {
  NavLink,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex justify-center w-1/4">
      <div>
        <h1 className="text-light-pink font-bold font-comfortaa text-5xl mt-5">
          Chopsticks
        </h1>
        <p className="text-light-pink italic font-comfortaa text-sm mt-5">
          Chopsticks is a two-player hand game that involves tapping and
          exchanging the fingers of both hands to score points and ultimately
          defeat the opponent. The game continues until one player has both
          hands eliminated, making the other player the winner.
        </p>
        <p className="text-light-pink italic font-comfortaa text-sm mt-5">
          Pick a game below to play!
        </p>
        <div className="grid grid-rows-3 gap-4 align-center justify-center mt-5 p-4">
          <a href="/game">
            <button className="bg-light-pink hover:bg-purple-500 text-dark-brown font-bold py-2 px-4 rounded font-comfortaa">
              NPC vs NPC
            </button>
          </a>{" "}
          <a href="/game">
            <button className="bg-light-pink hover:bg-purple-500 text-dark-brown font-bold py-2 px-4 rounded font-comfortaa">
              Human vs NPC
            </button>
          </a>{" "}
          <a href="/game">
            <button className="bg-light-pink hover:bg-purple-500 text-dark-brown font-bold py-2 px-4 rounded font-comfortaa">
              Human vs Human
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing;
