import React from 'react'
import Loader from 'react-loader-spinner'


const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const Spinner = () => {
    return (
        <div style={{ position:"relative" }}>
        <Loader
        style={style}
        type="ThreeDots"
        color="#999966"
        height={250}
        width={250}

     />
     </div>
    )
}

export default Spinner
