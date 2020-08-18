import React from "react";

function AboutModal(props) {
  const { isVisable, setIsVisable } = props;
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
          123 <br />
          <button onClick={() => setIsVisable(false)}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default AboutModal;
