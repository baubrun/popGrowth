import React, { useState } from "react";
import { useSelector } from "react-redux";
import { canvas } from "../d3";

import { populationState } from "../redux/populationSlice";
import { countriesState } from "../redux/countriesSlice";
import Tooltip from "./Tooltip";

const CountriesPath = () => {
  const { popGrowthScaleColors } = useSelector(populationState);
  const { countries } = useSelector(countriesState);

  const [values, setValues] = useState({
    name: "",
    index: null,
  });

  let [centerX, centerY] = canvas.pathGenerator.centroid(
    countries[values.index]
  );


  return (
    <>
      {countries &&
        popGrowthScaleColors &&
        countries.map((c, idx) => {
          return (
            <path
              d={canvas.pathGenerator(c)}
              key={idx}
              name={c.properties.name}
              onMouseEnter={(evt) =>
                setValues({
                  name: evt.target.getAttribute("name"),
                  index: idx,
                })
              }
              onMouseLeave={() => setValues("")}
              style={{
                fill: popGrowthScaleColors[idx],
              }}
            />
          );
        })}

      {values.name && (
        <Tooltip x={centerX} y={centerY}>
          {values.name}
        </Tooltip>
      )}
    </>
  );
};
export default CountriesPath;
