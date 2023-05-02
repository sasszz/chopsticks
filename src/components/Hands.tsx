import React, { useState } from "react";
import "../App.css";
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

const Hands = () => {
  const [rBOpacity, setRBOpacity] = useState(false);
  const [lBOpacity, setLBOpacity] = useState(false);
  const [rWImgSrc, setRWImgSrc] = useState(WHand1);
  const [lWImgSrc, setLWImgSrc] = useState(WHand1);
  const [rBImgSrc, setRBImgSrc] = useState(BHand1);
  const [lBImgSrc, setLBImgSrc] = useState(BHand1);
  const [rwCount, setRWCount] = useState(1);
  const [lwCount, setLWCount] = useState(1);
  const [rBCount, setRBCount] = useState(1);
  const [lBCount, setLBCount] = useState(1);
  const wImgSrcArray = [WHand0, WHand1, WHand2, WHand3, WHand4, WHand5];
  const bImgSrcArray = [BHand0, BHand1, BHand2, BHand3, BHand4, BHand5];

  const handleRWClick = () => {
    setRWImgSrc(wImgSrcArray[rwCount]);
    if (rwCount < 5) {
      setRWCount(rwCount + 1);
    } else {
      setRWCount(0);
    }
  };

  const handleLWClick = () => {
    setLWImgSrc(wImgSrcArray[lwCount]);
    if (lwCount < 5) {
      setLWCount(lwCount + 1);
    } else {
      setLWCount(0);
    }
  };

  // const handleRBClick = () => {
  //   setRBImgSrc(bImgSrcArray[rBCount]);
  //   if (rBCount < 5) {
  //     setRBCount(rBCount + 1);
  //   } else {
  //     setRBCount(0);
  //   }
  // };

  // const handleLBClick = () => {
  //   setLBImgSrc(bImgSrcArray[lBCount]);
  //   if (lBCount < 5) {
  //     setLBCount(lBCount + 1);
  //   } else {
  //     setLBCount(0);
  //   }
  // };

  const handleRBClick = () => {
    setRBOpacity(!rBOpacity);
    rBOpacity ? setLBOpacity(true) : setLBOpacity(false);
  };

  const handleLBClick = () => {
    setLBOpacity(!lBOpacity);
    lBOpacity ? setRBOpacity(true) : setRBOpacity(false);
  };

  return (
    <div className="">
      <div className="bg-dark-brown h-1/2">
        <button onClick={handleRWClick}>
          <img
            className="object-none h-48 w-96 -scale-y-100"
            alt="Hand"
            src={rWImgSrc}
          />
        </button>
        <button onClick={handleLWClick}>
          <img
            className="object-none h-48 w-96 transform -scale-100"
            alt="Hand"
            src={lWImgSrc}
          />
        </button>
      </div>
      <div className="bg-light-pink h-1/2">
        <button onClick={handleLBClick}>
          <img
            className={`object-none h-48 w-96 ${lBOpacity ? "opacity-30" : ""}`}
            alt="Hand"
            src={lBImgSrc}
          />
        </button>
        <button onClick={handleRBClick}>
          <img
            className={`object-none h-48 w-96 transform -scale-x-100 ${
              rBOpacity ? "opacity-30" : ""
            }`}
            alt="Hand"
            src={rBImgSrc}
          />
        </button>
      </div>
    </div>
  );
};

export default Hands;
