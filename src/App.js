/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux"

import Canvas from "./components/Canvas"
import {getPopulationGrowth} from "./redux/populationSlice"
import {getCountries} from "./redux/countriesSlice"



const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopulationGrowth())
  }, [])

  useEffect(() => {
    dispatch(getCountries())
  }, [])




  return (
    <>
    <Canvas />
      </>
  
  )
}

export default App
