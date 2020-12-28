/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { populationState } from "../redux/populationSlice";
import * as d3 from "d3";
import {canvas} from "../d3"


const Scales = () => {
  // const { countriesPopulationGrowth } = useSelector(populationState);
  // const [colors, setColors] = useState([]);

  



  // const colorScale = () => {
  //   const growths = countriesPopulationGrowth.map(i => Object.values(i))
  //   const range = d3.extent(growths);
  //   const maxChange = d3.max([-range[0], range[1]]);
  //   const colorScale = d3.scaleLinear()
  //     .domain([-maxChange, maxChange])
  //     .range(["#66ccff", "#009933"]);
  //     console.log('colorScale(growths) :>> ', colorScale());
  //   setColors(colorScale(growths));
  // };



  // useEffect(() => {
  //   colorScale();
  // }, [countriesPopulationGrowth]);


  return <div></div>;
};

export default Scales;
