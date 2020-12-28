import React from "react";

const Svg = (props) => {
  return (
    <svg height={props.height} width={props.width}>
      {props.children}
    </svg>
  );
};




export default Svg;
