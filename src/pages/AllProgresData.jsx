import React from "react";
import { ProgData } from "./ProgData";
import { RevEmiRatio } from "./RevEmiRatio";
import { Categoty } from "./Category";
import { Total } from "./Total";

export const AllProgresData = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)",gap:"2%"}} >
      <div style={{width:"100%"}}>
        <ProgData />
      </div>
      <div style={{width:"100%"}}>
        <RevEmiRatio />
      </div>
      <div style={{width:"100%"}}>
        <Categoty/>
      </div>
      <div style={{width:"100%"}}>
        <Total/>
      </div>
    </div>
  );
};
