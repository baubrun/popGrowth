/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { populationState } from "../redux/populationSlice";
import * as d3 from "d3";

const Scales = () => {
  const { countriesPopulationGrowth } = useSelector(populationState);
  const [colors, setColors] = useState([]);


  const colorScale = () => {
    const range = d3.extent(countriesPopulationGrowth);
    const maxChange = d3.max([-range[0], range[1]]);
    const colorScale = d3
      .scaleLinear()
      .domain([-maxChange, 0, maxChange])
      .range(["#66ccff", "#fff", " #009933"]);
    setColors(colorScale);
  };



  useEffect(() => {
    colorScale();
  }, []);


  return <div></div>;
};

export default Scales;
