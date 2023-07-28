import React, { useState } from "react";
import Essay1 from "./Essay1";
import Essay2 from "./Essay2";
import Essay3 from "./Essay3";
import "./Essay.css";

const Essay = () => {
  const [currentEssay, setCurrentEssay] = useState("essay1");

  const renderEssay = () => {
    switch (currentEssay) {
      case "essay1":
        return <Essay1 />;
      case "essay2":
        return <Essay2 />;
      case "essay3":
        return <Essay3 />;
      default:
        return <Essay1 />;
    }
  };

  return (
    <div className="essay-section">
      <h1 className="section-title">Essays</h1>
      <div className="essay-nav">
        <button
          className={currentEssay === "essay1" ? "selected-essay" : ""}
          onClick={() => setCurrentEssay("essay1")}
        >
          GPT & Full-Stack Engineers
        </button>
        <button
          className={currentEssay === "essay2" ? "selected-essay" : ""}
          onClick={() => setCurrentEssay("essay2")}
        >
          Video Games: A Balancing Act
        </button>
        <button
          className={currentEssay === "essay3" ? "selected-essay" : ""}
          onClick={() => setCurrentEssay("essay3")}
        >
          Texas&apos;s Floating Buoy Wall
        </button>
      </div>
      <div className="essay-content">{renderEssay()}</div>
    </div>
  );
};

export default Essay;
