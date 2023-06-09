// ##################################################################################################//
/////////////////////////////////////// CHOPSTICKS GAME ALGORITHM //////////////////////////////////////
// ##################################################################################################//

// INITIALIZE VARIABLES //////////////////////////////////////////////////////////////////////////////
let whiteRight = 1,
  whiteLeft = 1,
  blackRight = 1,
  blackLeft = 1;

export let whiteTurns = [];
export let blackTurns = [];
export let turnObject = {
  whiteRight: 1,
  whiteLeft: 1,
  blackRight: 1,
  blackLeft: 1,
};
export let gameOver = false;

// HELPER FUNCTIONS //////////////////////////////////////////////////////////////////////////////
const randomBool = () => {
  // Will generate a 0 or 1 at random
  const randomInt = Math.round(Math.random());
  return randomInt;
};

function randomIntFromInterval(max) {
  return Math.floor(Math.random() * max) + 1;
}

// ATTACK FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteAttack = (blackHand, whiteHand) => {
  console.log("White Attack");
  blackHand = whiteHand + blackHand;
  if (blackHand >= 5) {
    // Accounts for destroying black opponents hand
    blackHand = 0;
  }
  return blackHand;
};

export const blackAttack = (whiteHand, blackHand) => {
  console.log("Black Attack");
  whiteHand = whiteHand + blackHand;
  if (whiteHand >= 5) {
    // Accounts for destroying black opponents hand
    whiteHand = 0;
  }
  return whiteHand;
};

// SPLIT FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteSplit = () => {
  console.log("White Split");
  if (whiteLeft + whiteRight == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    return whiteRight == 2
      ? (whiteRight = 1) & (whiteLeft = 3)
      : (whiteRight = 2) & (whiteLeft = 2);
  } else if ((whiteLeft + whiteRight) % 2 == 0) {
    // total number of fingers is even
    return whiteRight < whiteLeft
      ? whiteRight++ & whiteLeft--
      : whiteRight-- & whiteLeft++;
  } else {
    return Math.abs(whiteLeft - whiteRight) > 1
      ? (whiteRight = 3) & (whiteLeft = 2)
      : (whiteRight = 4) & (whiteLeft = 2);
  }
};

export const blackSplit = () => {
  console.log("Black Split");
  if (blackLeft + blackRight == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    return blackRight == 2
      ? (blackRight = 1) & (blackLeft = 3)
      : (blackRight = 2) & (blackLeft = 2);
  } else if ((blackLeft + blackRight) % 2 == 0) {
    // total number of fingers is even
    return blackRight < blackLeft
      ? blackRight++ & blackLeft--
      : blackRight-- & blackLeft++;
  } else {
    return Math.abs(blackLeft - blackRight) > 1
      ? (blackRight = 3) & (blackLeft = 2)
      : (blackRight = 4) & (blackLeft = 2);
  }
};

// TURN FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteTurn = () => {
  console.log("Beginning of White turn:");

  if (
    whiteLeft + whiteRight == 1 ||
    whiteLeft + whiteRight == 2 ||
    whiteLeft + whiteRight == 3 ||
    whiteLeft + whiteRight == 7 ||
    whiteLeft + whiteRight == 8
  ) {
    // User cannot split on these combinations of fingers
    whiteTurns.push("Attack");
    if (blackRight + whiteRight >= 5) {
      blackRight = whiteAttack(blackRight, whiteRight);
    } else if (blackRight + whiteLeft >= 5) {
      blackRight = whiteAttack(blackRight, whiteLeft);
    } else if (blackLeft + whiteLeft >= 5) {
      blackLeft = whiteAttack(blackLeft, whiteLeft);
    } else if (blackLeft + whiteRight >= 5) {
      blackLeft = whiteAttack(blackLeft, whiteRight);
    } else {
      blackRight != 0
        ? (blackRight = whiteAttack(
            blackRight,
            whiteLeft != 0 ? whiteLeft : whiteRight
          ))
        : (blackLeft = whiteAttack(
            blackLeft,
            whiteLeft != 0 ? whiteLeft : whiteRight
          ));
    }
  }

  if (
    whiteLeft + whiteRight == 4 ||
    whiteLeft + whiteRight == 5 ||
    whiteLeft + whiteRight == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar;
    if (
      whiteTurns[whiteTurns.length - 1] == "Split" ||
      whiteTurns.length == 0
    ) {
      // blackRight + whiteRight >= 5 ||
      // blackRight + whiteLeft >= 5 ||
      // blackLeft + whiteLeft >= 5 ||
      // blackLeft + whiteRight >= 5
      decisionVar = 0;
    } else {
      decisionVar = randomBool();
    }
    if (decisionVar == 0) {
      whiteTurns.push("Attack");
      if (blackRight + whiteRight >= 5) {
        blackRight = whiteAttack(blackRight, whiteRight);
      } else if (blackRight + whiteLeft >= 5) {
        blackRight = whiteAttack(blackRight, whiteLeft);
      } else if (blackLeft + whiteLeft >= 5) {
        blackLeft = whiteAttack(blackLeft, whiteLeft);
      } else if (blackLeft + whiteRight >= 5) {
        blackLeft = whiteAttack(blackLeft, whiteRight);
      } else {
        blackRight != 0
          ? (blackRight = whiteAttack(
              blackRight,
              whiteLeft != 0 ? whiteLeft : whiteRight
            ))
          : (blackLeft = whiteAttack(
              blackLeft,
              whiteLeft != 0 ? whiteLeft : whiteRight
            ));
      }
    } else {
      whiteTurns.push("Split");
      whiteSplit();
    }
  }

  console.log("End of White turn:");
  turnObject = { whiteLeft, whiteRight, blackLeft, blackRight };

  if (
    (turnObject.whiteLeft == 0 && turnObject.whiteRight == 0) ||
    (turnObject.blackLeft == 0 && turnObject.blackRight == 0)
  ) {
    gameOver = true;
  }
  console.log(turnObject);
  return turnObject;
};

export const blackTurn = () => {
  console.log("Beginning of Black turn:");

  if (
    blackLeft + blackRight == 1 ||
    blackLeft + blackRight == 2 ||
    blackLeft + blackRight == 3 ||
    blackLeft + blackRight == 7 ||
    blackLeft + blackRight == 8
  ) {
    // User should not split on these combinations of fingers
    blackTurns.push("Attack");
    if (whiteRight + blackRight >= 5) {
      whiteRight = blackAttack(blackRight, whiteRight);
    } else if (whiteLeft + blackRight >= 5) {
      whiteLeft = blackAttack(whiteLeft, blackRight);
    } else if (whiteLeft + blackLeft >= 5) {
      whiteLeft = blackAttack(whiteLeft, blackLeft);
    } else if (whiteRight + blackLeft >= 5) {
      whiteRight = blackAttack(whiteRight, blackLeft);
    } else {
      whiteRight != 0
        ? (whiteRight = blackAttack(
            whiteRight,
            blackLeft != 0 ? blackLeft : blackRight
          ))
        : (whiteLeft = blackAttack(
            whiteLeft,
            blackLeft != 0 ? blackLeft : blackRight
          ));
    }
  }

  if (
    blackLeft + blackRight == 4 ||
    blackLeft + blackRight == 5 ||
    blackLeft + blackRight == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar;
    if (
      blackTurns[blackTurns.length - 1] == "Split" ||
      whiteTurns.length == 0
    ) {
      decisionVar = 0;
    } else {
      decisionVar = randomBool();
    }
    if (decisionVar == 0) {
      blackTurns.push("Attack");
      if (whiteRight + blackRight >= 5) {
        whiteRight = blackAttack(blackRight, whiteRight);
      } else if (whiteLeft + blackRight >= 5) {
        whiteLeft = blackAttack(whiteLeft, blackRight);
      } else if (whiteLeft + blackLeft >= 5) {
        whiteLeft = blackAttack(whiteLeft, blackLeft);
      } else if (whiteRight + blackLeft >= 5) {
        whiteRight = blackAttack(whiteRight, blackLeft);
      } else {
        whiteRight != 0
          ? (whiteRight = blackAttack(
              whiteRight,
              blackLeft != 0 ? blackLeft : blackRight
            ))
          : (whiteLeft = blackAttack(
              whiteLeft,
              blackLeft != 0 ? blackLeft : blackRight
            ));
      }
    } else {
      blackTurns.push("Split");
      blackSplit();
    }
  }

  console.log("End of Black turn:");
  turnObject = { whiteLeft, whiteRight, blackLeft, blackRight };

  if (
    (turnObject.whiteLeft == 0 && turnObject.whiteRight == 0) ||
    (turnObject.blackLeft == 0 && turnObject.blackRight == 0)
  ) {
    gameOver = true;
  }
  console.log(turnObject);
  return turnObject;
};
