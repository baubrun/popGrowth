import React from "react";
import {useSelector} from "react-redux"

import Svg from "./Svg";
import G from "./G";
import Legend from "./Legend";
import Path from "./Path";
import CountriesPath from "./CountriesPath";
import { canvas } from "../d3";

import {countriesState} from "../redux/countriesSlice"
import Spinner from "./Spinner"


const style = {
  svgMainColor: {
    fill: "#e6ffff",
  },
  graticule: {
    fill: "none",
    strokeWidth: 1,
    stroke: "#d3cdc5",
  },
  legendBounds: `translate(120, ${canvas.dimensions.width < 800 
    ? canvas.dimensions.boundedHeight - 30
    : canvas.dimensions.boundedHeight * 0.5
    })`
    
};

const Canvas = () => {
const {loading} = useSelector(countriesState)


  if(loading){
    return <Spinner />
  }

  return (
    <>
      <Svg
        height={canvas.dimensions.height}
        width={canvas.dimensions.width}
        style={style.svgMainColor}
      >
        <G transform={canvas.bounds}>
          <Path path={canvas.path} />
          <Path path={canvas.graticule} style={style.graticule} />
          <CountriesPath />
        </G>
        <G transform={style.legendBounds}>
          <Legend />
        </G>
      </Svg>
    </>
  );
};

export default Canvas;
