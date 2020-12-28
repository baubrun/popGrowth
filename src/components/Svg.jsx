import React from "react";

const Svg = (props) => {
  return (
    <svg height={props.height} width={props.width} style={props.style}>
      {props.children}
    </svg>
  );
};




export default Svg;
