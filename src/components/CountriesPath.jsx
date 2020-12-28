import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {canvas} from "../d3"

import { countriesState } from "../redux/countriesSlice";

const CountriesPath = () => {
  const {countries} = useSelector(countriesState);


  

  return (
      <>
      {countries && countries.map((c, idx) => {
            return (
              <path
              
                key={idx}
                d={canvas.pathGenerator(c)}
                style={{ 
                    fill: "black", 
                    stroke: "light-gray",
                }}
              />
            );
          })}
      </>
  )
    
  
};
export default CountriesPath;
