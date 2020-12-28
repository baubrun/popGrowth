import { configureStore } from '@reduxjs/toolkit';
import populationReducer from "./populationSlice";
import countriesReducer from "./countriesSlice";


export default configureStore({
    reducer: {
        population: populationReducer,
        countries: countriesReducer,
    }
})



