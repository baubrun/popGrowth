import React from "react";

const G = (props) => {
  return (
  <g 
  transform={props.transform}
  >
      {props.children}
</g>
  )
};

export default G;
