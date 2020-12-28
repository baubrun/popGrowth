import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import * as d3 from "d3";

export const countriesMapPath = `${process.env.PUBLIC_URL}/world.geojson.json`



export const getCountriesMap = createAsyncThunk(
    "/countriesData",
    async () => {
        try {
            const res = await d3.json(countriesMapPath)
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




const countriesMapSlice = createSlice({
    name: "countriesMap",
    initialState: {
        countriesMap: [],
        error: "",
        loading: false
    },

    reducers: {},
    extraReducers: {
        [getCountriesMap.pending]: (state) => {
            state.loading = true;
        },
        [getCountriesMap.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                data
            } = action.payload
            if (error) {
                state.error = error
            } else {
                state.countriesMap = data
            }
        },
        [getCountriesMap.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }

})



export const countriesMapState = (state) => state.countriesMap;
export default countriesMapSlice.reducer;