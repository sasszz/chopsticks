import React, { useState } from "react";
import "../App.css";
import "./hands.css";
import WHand0 from "./assets/imgs/Hands/W0.svg";
import WHand1 from "./assets/imgs/Hands/W1.svg";
import WHand2 from "./assets/imgs/Hands/W2.svg";
import WHand3 from "./assets/imgs/Hands/W3.svg";
import WHand4 from "./assets/imgs/Hands/W4.svg";
import WHand5 from "./assets/imgs/Hands/W5.svg";
import BHand0 from "./assets/imgs/Hands/B0.svg";
import BHand1 from "./assets/imgs/Hands/B1.svg";
import BHand2 from "./assets/imgs/Hands/B2.svg";
import BHand3 from "./assets/imgs/Hands/B3.svg";
import BHand4 from "./assets/imgs/Hands/B4.svg";
import BHand5 from "./assets/imgs/Hands/B5.svg";
import {
  whiteTurn,
  blackTurn,
  turnObject,
  gameOver,
} from "./utils/game-logic.js";

const Hands = () => {
  const wImgSrcArray = [WHand0, WHand1, WHand2, WHand3, WHand4, WHand5];
  const bImgSrcArray = [BHand0, BHand1, BHand2, BHand3, BHand4, BHand5];
  const [wLImageSrc, setWLImageSrc] = useState(1);
  const [wRImageSrc, setWRImageSrc] = useState(1);
  const [bLImageSrc, setBLImageSrc] = useState(1);
  const [bRImageSrc, setBRImageSrc] = useState(1);

  const handleWhiteClick = () => {
    whiteTurn();
    console.log(turnObject);
    setWLImageSrc(turnObject.whiteLeft);
    setWRImageSrc(turnObject.whiteRight);
    setBLImageSrc(turnObject.blackLeft);
    setBRImageSrc(turnObject.blackRight);
  };

  const handleBlackClick = () => {
    blackTurn();
    console.log(turnObject);
    setWLImageSrc(turnObject.whiteLeft);
    setWRImageSrc(turnObject.whiteRight);
    setBLImageSrc(turnObject.blackLeft);
    setBRImageSrc(turnObject.blackRight);
  };

  return (
    <div className="mt-5 max-w-md">
      <button
        onClick={handleWhiteClick}
        className="mt-3 bg-light-pink hover:bg-blue-500 text-dark-brown font-bold py-2 px-4 rounded"
      >
        Initiate Turn
      </button>
      <div className="grid grid-cols-2 row bg-dark-brown h-1/2">
        <img
          className="object-none h-48 w-96 -scale-y-100"
          alt="Hand"
          src={wImgSrcArray[wLImageSrc]}
        />
        <img
          className="object-none h-48 w-96 transform -scale-100"
          alt="Hand"
          src={wImgSrcArray[wRImageSrc]}
        />
      </div>
      <div className="grid grid-cols-2 row bg-light-pink h-1/2">
        <img
          className={`object-none h-48 w-96`}
          alt="Hand"
          src={bImgSrcArray[bLImageSrc]}
        />
        <img
          className={`object-none h-48 w-96 transform -scale-x-100`}
          alt="Hand"
          src={bImgSrcArray[bRImageSrc]}
        />
      </div>
      <button
        onClick={handleBlackClick}
        className="mt-3 bg-light-pink hover:bg-purple-500 text-dark-brown font-bold py-2 px-4 rounded"
      >
        Initiate Turn
      </button>
      <div>
        <p className="text-3xl text-light-pink font-comfortaa mt-5"></p>
      </div>
    </div>
  );
};

export default Hands;
