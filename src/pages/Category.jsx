import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

export const Categoty = () => {
  const [data, setData] = useState(32);

  const progressBarColor = "green";

  const outerContainerStyle = {
    border: "1px solid #ddd",borderRadius:"2%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "130%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const pTagStyle = {
    marginBottom: "4px", 
    paddingRight:"60%" 
  };

  return (
    <div style={outerContainerStyle}>
      <p style={pTagStyle}>Category-1</p>
      <ProgressBar data={data} text={`${data}% YOY`} color={progressBarColor} />
    </div>
  );
};
