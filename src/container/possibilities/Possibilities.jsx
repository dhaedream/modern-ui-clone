import React from "react";
import "./possibilities.css";
import possibilityImage from "../../assets/possibility.png";

const Possibilities = () => {
  return (
    <div className="gpt3__possibilities section__padding" id="possibilitiy">
      <div className="gpt3__possibilities-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibilities-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The possibilities Are Beyong Your Imagination
        </h1>
        <p>
          Street art hashtag leggings before they sold out mlkshk affogato.
          Kitsch scenester tilde tbh, organic single-origin coffee lyft hashtag
          glossier roof party hexagon affogato crucifix artisan.
        </p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  );
};

export default Possibilities;
