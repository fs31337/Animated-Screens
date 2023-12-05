// src/components/Screen.js
import React from "react";
import Navigator from "../Navigator";
import transition from "../Transition";
export const AboutScreen = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
      }}
    >
      <Navigator />
      <h1 style={{ color: "white", fontSize: 150, alignSelf: "center" }}>
        ABOUT
      </h1>
    </div>
  );
};

export default transition(AboutScreen);
