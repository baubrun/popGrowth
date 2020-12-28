import React from 'react'

import Svg from "./Svg"
import {canvas} from "../d3"


const Wrapper = () => {
    return (
        <>
            <Svg
             height={canvas.dimensions.height}
             width={canvas.dimensions.width}
             
             />
        </>
    )
}

export default Wrapper
