import React from "react";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibilities,
  WhatGPT3,
  Header,
} from "./container/index.js";
import { Cta, Brand, Navbar } from "./components/index.js";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
