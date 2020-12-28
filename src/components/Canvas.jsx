import React, { useEffect, useState } from "react";
import { canvas } from "../d3";
import Svg from "./Svg";
import G from "./G";
import Scales from "./Scales";
import Path from "./Path";

const Canvas = () => {
  return (
    <>
      <h1>Pop Growth 2019</h1>
      <Svg 
      height={canvas.dimensions.height} 
      width={canvas.dimensions.width}>
        <G transform={canvas.bounds}>
          <Path 
          path={canvas.path} 
          style={{ style: {fill: "steeleblue"} }}
          />
        </G>
      </Svg>
      <Scales />
    </>
  );
};

export default Canvas;
