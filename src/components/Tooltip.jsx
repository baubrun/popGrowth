import React from "react";

const style = { 
    fill: "black", 
    fontWeight: "bolder",
    fontSize: "large",
}




const Tooltip = (props) => {
  return (
      <>
    <text 
    x={props.x} 
    y={props.y} 
    style={style}
    >
      {props.children}
    </text>
    </>
  );
};

export default Tooltip;
