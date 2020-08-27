import React from "react";

function AboutModal(props) {
  const { isVisable, setIsVisable, useCount, counter, setCounter } = props;
  if (isVisable) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444",
          }}
        >
          First counter: {useCount[0]}
          <br />
          Second counter: {useCount[1]}
          <br />
          <button
            onClick={() => {
              if (counter >= 10) {
                setCounter(0);
                setIsVisable(false);
              } else {
                setIsVisable(false);
              }
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default AboutModal;
