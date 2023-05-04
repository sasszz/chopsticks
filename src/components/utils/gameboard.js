import { whiteTurn, blackTurn, turnObject, gameOver } from "./game-logic.js";

function recurse() {
  if (gameOver) {
    console.log(turnObject);
    console.log("GAME OVER");
    return;
  } else {
    blackTurn();
    whiteTurn();
    console.log("############################################");
    recurse();
  }
}

recurse();