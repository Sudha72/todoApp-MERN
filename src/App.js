import "./App.css";
import RenderData from "./components/RenderData";
import React, { useState } from "react";

function App() {
  let [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    if(tabName===activeTab){
      setActiveTab("");
    }
    else{
      setActiveTab(tabName);
    }
  };

  return (
    <div>
      <div className="navbar">
        <button
          className={activeTab === "Love" ? "active" : ""}
          onClick={() => handleTabClick("Love")}
        >
          <i className="bn31">
            <span className="bn31span">Love</span>
          </i>
        </button>
        <button
          className={activeTab === "Wisdom" ? "active" : ""}
          onClick={() => handleTabClick("Wisdom")}
        >
          <i className="bn31">
            <span className="bn31span">Wisdom</span>
          </i>
        </button>
        <button
          className={activeTab === "Motivation" ? "active" : ""}
          onClick={() => handleTabClick("Motivation")}
        >
          <i className="bn31">
            <span className="bn31span">Motivation</span>
          </i>
        </button>
        <button
          className={activeTab === "Philosophy" ? "active" : ""}
          onClick={() => handleTabClick("Philosophy")}
        >
          <i className="bn31">
            <span className="bn31span">Philosophy</span>
          </i>
        </button>
        <button
          className={activeTab === "Hate" ? "active" : ""}
          onClick={() => handleTabClick("Hate")}
        >
          <i className="bn31">
            <span className="bn31span">Hate</span>
          </i>
        </button>
      </div>

      {activeTab === "Love" && <RenderData text="Love" />}
      {activeTab === "Wisdom" && <RenderData text="Wisdom" />}
      {activeTab === "Motivation" && <RenderData text="motivational" />}
      {activeTab === "Philosophy" && <RenderData text="Philosophy" />}
      {activeTab === "Hate" && <RenderData text="Hate" />}
      {activeTab === "" && <RenderData text="" />}
    </div>
  );
}

export default App;
