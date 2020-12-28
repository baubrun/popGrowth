import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux"

import Canvas from "./components/Canvas"
import {getPopulation} from "./redux/populationSlice"



const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopulation())
  }, [dispatch])

  return (
    <>
    <Canvas />
      </>
  
  )
}

export default App
