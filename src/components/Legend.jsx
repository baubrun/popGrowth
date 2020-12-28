/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

 
import "../css/legend.css";

const Legend = () => {

  const legendWidth = 120;
  const legendHeight = 16;

  return (
    <>
      <text y="100" className="legend legendTitle">
        Population Growth
      </text>
      <text y="125" className="legend secondary-text">
        Percent change in 2019
      </text>
      <rect
        y={145}
        height={legendHeight}
        width={legendWidth}
        fill="url(#legendGradient)"
      />
      <defs>
        <linearGradient id="legendGradient">
          <stop stop-color="#ff00ff" offset="0%"></stop>
          <stop stop-color="#fff" offset="50%"></stop>
          <stop stop-color="#009933" offset="100%"></stop>
        </linearGradient>
      </defs>
      
    </>
  );
};

export default Legend;
