import React from "react";
import { useSelector } from "react-redux";
import { canvas } from "../d3";

import { populationState } from "../redux/populationSlice";
import { countriesState } from "../redux/countriesSlice";

const CountriesPath = () => {
  const { popGrowthScaleColors } = useSelector(populationState);
  const { countries } = useSelector(countriesState);


  return (
    <>
      {countries &&
        popGrowthScaleColors &&
        countries.map((c, idx) => {
          return (
            <path
              key={idx}
              d={canvas.pathGenerator(c)}
              style={{
                fill: popGrowthScaleColors[idx],
                stroke: "light-gray",
              }}
            />
          );
        })}
    </>
  );
};
export default CountriesPath;
