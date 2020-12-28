import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import * as d3 from "d3";

export const countriesPath = `${process.env.PUBLIC_URL}/data/world.geojson`


export const getCountries = createAsyncThunk(
    "/countriesData",
    async () => {
        try {
            const res = await d3.json(countriesPath)
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




const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        error: "",
        loading: false
    },

    reducers: {},
    extraReducers: {
        [getCountries.pending]: (state) => {
            state.loading = true;
        },
        [getCountries.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                data
            } = action.payload
            if (error) {
                state.error = error
            } else {
                state.countries = data.features
            }
        },
        [getCountries.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }

})



export const countriesState = (state) => state.countries;
export default countriesSlice.reducer;