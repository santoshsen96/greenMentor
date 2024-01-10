import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

export const ProgData = () => {
  const [data, setData] = useState(7.4);

  const progressBarColor = "red";

  const outerContainerStyle = {
    border: "1px solid #ddd",
    borderRadius: "2%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "130%", 
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
  };

  const pTagStyle = {
    marginBottom: "4px",
    paddingRight:"33%" 

  };

  return (
    <div style={outerContainerStyle}>
      <p style={pTagStyle}>Current Year Emission</p>
      <ProgressBar data={data} text={`${data}% YOY`} color={progressBarColor} />
    </div>
  );
};
