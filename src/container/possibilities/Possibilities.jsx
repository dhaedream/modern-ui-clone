import React from "react";
import "./possibilities.css";
import possibilityImage from "../../assets/possibility.png";

const Possibilities = () => {
  return (
    <div className="gpt3__possibilities section__padding" id="possibilitiy">
      <div className="gpt3__possibilities-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
    </div>
  );
};

export default Possibilities;
