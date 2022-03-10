import React from "react";
import "./features.css";

const featuresData = [
  {
    title: "Improving and Updating Instantly",
    text: "Cold-pressed banjo iceland, retro whatever meditation brooklyn. Woke you probably haven't heard of them bitters live-edge semiotics fixie XOXO cronut blue bottle prism af raclette. Next level polaroid godard pinterest vaporware hexagon before they sold out locavore microdosing tattooed tbh.",
  },
  {
    title: "Become The Master of AI",
    text: "Bushwick meggings crucifix, distillery messenger bag occupy shoreditch chambray blog chartreuse lo-fi. Subway tile semiotics plaid, fashion axe yuccie kitsch mlkshk shabby chic celiac umami beard.",
  },
  {
    title: "Messages Anywhere on The Go",
    text: "Air plant tofu kitsch affogato wolf tattooed chillwave, readymade activated charcoal craft beer scenester polaroid hot chicken poke.",
  },
  {
    title: "Discover Virtual Reality as an AI",
    text: "Cold-pressed banjo iceland, retro whatever meditation brooklyn. Woke you probably haven't heard of them bitters live-edge semiotics fixie XOXO cronut blue bottle prism af raclette. Next level polaroid godard pinterest vaporware hexagon before they sold out locavore microdosing tattooed tbh.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now and You Just Need To Realize It. Step into The
          Future Today & Make It Happen
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__features-container"></div>
    </div>
  );
};

export default Features;
