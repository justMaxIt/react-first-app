import React, { useState, useEffect } from "react";
import Shuffles from "../components/shuffles";
import "../css/App.css";

function AboutShuffles() {
  const [color, setColor] = useState(["red", "green", "blue", "yellow"]);
  const [changeFirst, setChangeFirst] = useState(false);
  const [changeSecond, setChangeSecond] = useState(false);
  const [changeThird, setChangeThird] = useState(false);
  const [lastClick, setLastClick] = useState(false);

  useEffect(() => {
    if (changeFirst) {
      const newColor = [...color];
      const elFirst = newColor.shift();
      newColor
        .sort(function () {
          return Math.random() - 0.5;
        })
        .unshift(elFirst);
      setColor(newColor);
      setChangeFirst(false);
      // console.log(color, elFirst, newColor);
    }

    if (changeSecond) {
      const newColor = [...color];
      const elSecond = [newColor.splice(1, 1)].toString();
      newColor.sort(function () {
        return Math.random() - 0.5;
      });
      newColor.push(newColor[2]);
      newColor[2] = newColor[1];
      newColor[1] = elSecond;
      setColor(newColor);
      setChangeSecond(false);
      // console.log(elSecond, newColor);
    }

    if (changeThird) {
      const newColor = [...color];
      const elThird = [newColor.splice(2, 1)].toString();
      newColor.sort(function () {
        return Math.random() - 0.5;
      });
      newColor.push(newColor[2]);
      newColor[2] = elThird;
      setColor(newColor);
      setChangeThird(false);
      // console.log(elSecond, newColor);
    }

    if (lastClick) {
      setColor(["red", "green", "blue", "yellow"]);
      setLastClick(false);
    }
  }, [color, lastClick, changeFirst, changeSecond, changeThird]);

  return (
    <div className="about-shuffles">
      <Shuffles
        color={color}
        setChangeFirst={setChangeFirst}
        setChangeSecond={setChangeSecond}
        setChangeThird={setChangeThird}
        setLastClick={setLastClick}
      />
    </div>
  );
}

export default AboutShuffles;
