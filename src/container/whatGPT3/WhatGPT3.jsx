import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam."
        />
        <Feature
          title="Documents"
          text="Mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga."
        />
        <Feature
          title="Education"
          text="Iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
