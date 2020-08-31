import React, { useState, useEffect } from "react";
import Shuffles from "../components/shuffles";
import "../css/App.css";

function AboutShuffles() {
  const [color, setColor] = useState(["red", "green", "blue", "yellow"]);
  const [change, setChange] = useState(false);
  const [lastClick, setLastClick] = useState(false);

  useEffect(() => {
    if (change) {
      setColor(
        color.sort(function () {
          return Math.random() - 0.5;
        })
      );
      setChange(false);

      // console.log(color, change);
    }
    if (lastClick) {
      setColor(["red", "green", "blue", "yellow"]);
      setChange(false);
      setLastClick(false);
    }
  }, [change, lastClick]);

  return (
    <div className="about-shuffles">
      <Shuffles
        color={color}
        setChange={setChange}
        setLastClick={setLastClick}
      />
    </div>
  );
}

export default AboutShuffles;
