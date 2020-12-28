import React from 'react'
import G from "./G"


const Svg = (props) => {
    return (
        <svg
        height={props.height}
         width={props.width}
         
         
         >
           <G 
           transform={props.bounds}
           />
        </svg>
    )
}

export default Svg
