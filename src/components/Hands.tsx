import React, { useState } from "react";
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
  const [wImgSrc, setWImgSrc] = useState(WHand0);
  const [bImgSrc, setBImgSrc] = useState(BHand0);
  const [wCount, setWCount] = useState(1);
  const [bCount, setBCount] = useState(1);
  const wImgSrcArray = [WHand0, WHand1, WHand2, WHand3, WHand4, WHand5];
  const bImgSrcArray = [BHand0, BHand1, BHand2, BHand3, BHand4, BHand5];

  const handleWClick = () => {
    setWImgSrc(wImgSrcArray[wCount]);
    if (wCount < 5) {
      setWCount(wCount + 1);
    } else {
      setWCount(0);
    }
  };

  const handleBClick = () => {
    setBImgSrc(bImgSrcArray[bCount]);
    if (bCount < 5) {
      setBCount(bCount + 1);
    } else {
      setBCount(0);
    }
  };

  return (
    <div>
      <div className="bg-dark-brown h-[50vh]">
        <button onClick={handleWClick}>
          <img
            className="object-none h-48 w-96 -scale-y-100"
            alt="Hand"
            src={wImgSrc}
          />
        </button>
        <button onClick={handleWClick}>
          <img
            className="object-none h-48 w-96 transform -scale-100"
            alt="Hand"
            src={wImgSrc}
          />
        </button>
      </div>
      <div className="bg-light-pink h-[50vh]">
        <button onClick={handleBClick}>
          <img className="object-none h-48 w-96" alt="Hand" src={bImgSrc} />
        </button>
        <button onClick={handleBClick}>
          <img
            className="object-none h-48 w-96 transform -scale-x-100"
            alt="Hand"
            src={bImgSrc}
          />
        </button>
      </div>
    </div>
  );
};

export default Hands;
