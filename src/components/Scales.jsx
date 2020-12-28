/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { populationState } from "../redux/populationSlice";
import * as d3 from "d3";

const Scales = () => {
  const { countriesPopulationGrowth } = useSelector(populationState);
  const [colors, setColors] = useState([]);

  



  const colorScale = () => {
    // console.log('countriesPopulationGrowth :>> ', countriesPopulationGrowth);
    const growths = countriesPopulationGrowth.map(i => Object.values(i))
    console.log('growths :>>', growths)
    // console.log('growths values :>> ', growths);
    const range = d3.extent(growths);
    console.log('range :>> ', range);
    // const maxChange = d3.max([-range[0], range[1]]);
    // const colorScale = d3.scaleLinear()
    //   .domain([-maxChange, 0, maxChange])
    //   .range(["#66ccff", "#fff", " #009933"]);
    // setColors(colorScale);
  };



  useEffect(() => {
    colorScale();
  }, [countriesPopulationGrowth]);


  return <div></div>;
};

export default Scales;
