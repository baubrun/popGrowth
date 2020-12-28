import { configureStore } from '@reduxjs/toolkit';
import populationReducer from "./populationSlice";
import countriesMapReducer from "./countriesMapSlice";


export default configureStore({
    reducer: {
        population: populationReducer,
        countriesMap: countriesMapReducer,
    }
})



