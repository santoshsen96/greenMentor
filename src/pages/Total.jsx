import React, { useState } from "react";

export const Total = () => {
  const [data, setData] = useState(143);

  const progressBarColor = "red";

  const outerContainerStyle = {
    
    border: "1px solid #ddd",
    backgroundColor:"#32CD32",
    borderRadius: "2%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "40%",
    height: "130%", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  };

  const pTagStyle = {
    color: '#FFFFFF',
fontFamily: 'HelveticaNeue',
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '400',
lineHeight: '18px' 
  }
  return (
    <div style={outerContainerStyle}>
      <p style={pTagStyle}>Total numbers of reached suppliers </p>
      
    </div>
  );
};
