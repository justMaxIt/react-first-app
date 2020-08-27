import React, { useState, useEffect } from "react";
import AboutMenu from "../components/AboutMenu";
import AboutContent from "../components/AboutContent";
import AboutModal from "../components/AboutModal";

function AboutPage() {
  const [isVisable, setIsVisable] = useState(false);
  const [counter, setCounter] = useState(0);
  const [useCount, setUseCount] = useState([0, 0]);

  useEffect(() => {
    if (useCount[1] >= 1 && counter === 0) {
      setCounter(0);
      setUseCount([useCount[0] + 1, useCount[1]]);
    }
    if (counter >= 10 && !isVisable) {
      setIsVisable(true);
      setUseCount([useCount[0], useCount[1] + 1]);
    }
  }, [counter]);

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
      <AboutModal
        isVisable={isVisable}
        setIsVisable={setIsVisable}
        useCount={useCount}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
}

export default AboutPage;
