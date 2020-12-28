import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { canvas } from "../d3";

import { populationState } from "../redux/populationSlice";
import { countriesState } from "../redux/countriesSlice";
import * as d3 from "d3";

const CountriesPath = () => {
  const { countriesPopulationGrowth } = useSelector(populationState);
  const { countries } = useSelector(countriesState);
  const [colors, setColors] = useState([]);

  const colorScale = () => {
    const growths = countriesPopulationGrowth.map((i) => i.value);
    const range = d3.extent(growths);

    const maxChange = d3.max([-range[0], range[1]]);

    const colorScale = d3.scaleLinear()
      .domain([-maxChange, maxChange])
      .range(["#ff00ff", "#009933"]);

    const scales = growths.map(c => colorScale(c)) 
    setColors(scales)
    
  };

  useEffect(() => {
    colorScale();
  }, [countriesPopulationGrowth]);

  return (
    <>
      {countries &&
        colors.length > 0 &&
        countries.map((c, idx) => {
          return (
            <path
              key={idx}
              d={canvas.pathGenerator(c)}
              style={{
                fill: colors[idx],
                stroke: "light-gray",
              }}
            />
          );
        })}
    </>
  );
};
export default CountriesPath;
