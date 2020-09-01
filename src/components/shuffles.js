import React from "react";
import "../css/App.css";

function Shuffles(props) {
  const {
    color,
    setChangeFirst,
    setChangeSecond,
    setChangeThird,
    setLastClick,
  } = props;

  return (
    <>
      <div
        className={color[0]}
        onClick={() => {
          // setChange(true);
          setChangeFirst(true);
        }}
      ></div>
      <div
        className={color[1]}
        onClick={() => {
          setChangeSecond(true);
        }}
      ></div>
      <div
        className={color[2]}
        onClick={() => {
          setChangeThird(true);
        }}
      ></div>
      <div
        className={color[3]}
        onClick={() => {
          setLastClick(true);
        }}
      ></div>
    </>
  );
}

export default Shuffles;
