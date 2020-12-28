import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux"

import Canvas from "./components/Canvas"
import {getPopulationGrowth} from "./redux/populationSlice"



const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopulationGrowth())
  }, [dispatch])

  return (
    <>
    <Canvas />
      </>
  
  )
}

export default App
