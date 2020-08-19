import React, { useState, useEffect } from "react";
import AboutMenu from "../components/AboutMenu";
import AboutContent from "../components/AboutContent";
import AboutModal from "../components/AboutModal";

function AboutPage() {
  const [isVisable, setIsVisable] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isVisable) {
      return () => setCounter(0);
    }
    if (counter >= 9) {
      return () => setIsVisable(true);
    }
  }, [counter, isVisable]);

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
