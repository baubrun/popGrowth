/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";

import { populationState } from "../redux/populationSlice";
import "../css/legend.css";

const Legend = () => {
  const { maxGrowth } = useSelector(populationState);

  const legendWidth = 120;
  const legendHeight = 16;
  const legendY = 100;

  if (!maxGrowth) return null

  return (
    <>
      <text y={legendY} className="legend legendTitle">
        Population Growth
      </text>
      <text y={legendY + 20} className="legend secondary-text">
        Percent change in 2019
      </text>
      <rect
        y={legendY + 30}
        height={legendHeight}
        width={legendWidth}
        fill="url(#legendGradient)"
      />
      <defs>
        <linearGradient id="legendGradient">
          <stop stopColor="#ff00ff" offset="0%"></stop>
          <stop stopColor="#fff" offset="50%"></stop>
          <stop stopColor="#009933" offset="100%"></stop>
        </linearGradient>
      </defs>
      <text
        x={legendWidth - legendWidth - 10 }
        y={legendY + 45}
        className="legendValues endValue"
      >
        {-maxGrowth.toFixed(2)}
      </text>
      <text
        x={legendWidth + 10}
        y={legendY + 45}
        className="legendValues startValue"
      >
        {maxGrowth.toFixed(2)}
      </text>
    </>
  );
};

export default Legend;
