import { configureStore } from '@reduxjs/toolkit';
import populationReducer from "./populationSlice";


export default configureStore({
    reducer: {
        population: populationReducer,
    }
})



