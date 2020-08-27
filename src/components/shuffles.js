import React from "react";
import "./../css/App.css";

function Shuffles(props) {
  const { color } = props;
  // const random = Math.floor(Math.random() * blocks.length);
  return (
    <>
      <div className={color[0]}></div>
      <div className={color[1]}></div>
      <div className={color[2]}></div>
      <div className={color[3]}></div>
    </>
  );
}

export default Shuffles;
