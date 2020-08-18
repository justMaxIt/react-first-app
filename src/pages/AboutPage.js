import React, { useState } from "react";
import AboutMenu from "../components/AboutMenu";
import AboutContent from "../components/AboutContent";
import AboutModal from "../components/AboutModal";

function AboutPage() {
  const [isVisable, setIsVisable] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div className="about-page">
      <AboutMenu
        counter={counter}
        setCounter={setCounter}
        isVisable={isVisable}
        setIsVisable={setIsVisable}
      />
      <br />
      <AboutContent counter={counter} />
      <AboutModal isVisable={isVisable} setIsVisable={setIsVisable} />
    </div>
  );
}

export default AboutPage;
