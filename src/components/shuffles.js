import React from "react";
import "../css/App.css";

function Shuffles(props) {
  const { color, setChange, setLastClick } = props;

  return (
    <>
      <div
        className={color[0]}
        onClick={() => {
          setChange(true);
        }}
      ></div>
      <div
        className={color[1]}
        onClick={() => {
          setChange(true);
        }}
      ></div>
      <div
        className={color[2]}
        onClick={() => {
          setChange(true);
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
