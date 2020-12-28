import React, {useEffect, useState} from "react";
import {canvas} from "../d3"
import Svg from "./Svg";


const Canvas = () => {
 

  return (
    <>
    <h1>Canvas here</h1>
      <Svg
      transform={canvas.bounds}
       height={canvas.dimensions.height}
       width={canvas.dimensions.width}
      />
    </>
  );
};

export default Canvas;
