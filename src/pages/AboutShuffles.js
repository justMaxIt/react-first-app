import React, { useState, useEffect } from "react";
import Shuffles from "../components/shuffles";
import "../css/App.css";

function AboutShuffles() {
  // const [blocks, setBlocks] = useState(Array(4).fill(null));
  const [color, setColor] = useState(["red", "green", "blue", "yellow"]);
  // const [counter, setCounter] = useState(0);
  // const [useCount, setUseCount] = useState([0, 0]);

  // useEffect(() => {
  //   if (useCount[1] >= 1 && counter === 0) {
  //     setCounter(0);
  //     setUseCount([useCount[0] + 1, useCount[1]]);
  //   }
  //   if (counter >= 10 && !isVisable) {
  //     setIsVisable(true);
  //     setUseCount([useCount[0], useCount[1] + 1]);
  //   }
  // }, [counter]);

  return (
    <div className="about-shuffles">
      <Shuffles color={color} />
    </div>
  );
}

export default AboutShuffles;
