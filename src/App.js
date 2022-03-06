import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import { Article, Brand, Cta, Feature, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
