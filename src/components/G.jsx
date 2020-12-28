import React from "react";

const G = (props) => {
    // console.log('props.transform :>>', props.transform)
  return <g 
  transform={props.transform}
  style={props.style}
  >{props.children}</g>;
};

export default G;
