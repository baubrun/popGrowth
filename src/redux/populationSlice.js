import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import * as d3 from "d3";

export const popGrowthPath = `${process.env.PUBLIC_URL}/data/pop.growth2019.csv`


export const getPopulation = createAsyncThunk(
    "/populationData",
    async () => {
        try {
            const res = await d3.csv(popGrowthPath)
            return {
                data: res
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
)




const populationSlice = createSlice({
    name: "population",
    initialState: {
        countries: [],
        error: "",
        loading: false
    },

    reducers: {},
    extraReducers: {
        [getPopulation.pending]: (state) => {
            state.loading = true;
        },
        [getPopulation.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                data
            } = action.payload
            if (error) {
                state.error = error
            } else {
                state.countries = data
            }
        },
        [getPopulation.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }

})



export const populationState = (state) => state.population;
export default populationSlice.reducer;