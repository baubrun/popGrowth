import React, { useEffect, useState } from "react";
import { canvas } from "../d3";
import Svg from "./Svg";
import G from "./G";
import Scales from "./Scales";
import Path from "./Path";


const style = {
  svgMainColor: {
    fill: "#b3ecff"
  },
  graticule: {
    fill: "none",
    strokeWidth: 1,
    stroke: "#9A8B7A"
  }
}



const Canvas = () => {
  return (
    <>
      <h1>Pop Growth 2019</h1>
      <Svg 
      height={canvas.dimensions.height} 
      width={canvas.dimensions.width}
      style={style.svgMainColor}
      >
      
        <G transform={canvas.bounds}>
          <Path path={canvas.path} />
          <Path path={canvas.graticule} style={style.graticule}/>
        </G>
      </Svg>
      <Scales />
    </>
  );
};

export default Canvas;
