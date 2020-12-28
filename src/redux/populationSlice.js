import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import * as d3 from "d3";

export const popGrowthPath = `${process.env.PUBLIC_URL}/data/pop.growth2019.csv`


export const getPopulationGrowth = createAsyncThunk(
    "/populationGrowthData",
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
        countriesPopulationGrowth: [],
        popGrowthScaleColors: [],
        error: "",
        loading: false

    },

    reducers: {},
    extraReducers: {
        [getPopulationGrowth.pending]: (state) => {
            state.loading = true;
        },
        [getPopulationGrowth.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                data
            } = action.payload
            if (error) {
                state.error = error
            } else {
                const pg = data.map(i => {
                    return {
                        name: i["Country Code"],
                        value: parseFloat(i["Population growth (annual %)"]) || 0
                    }
                })
                state.countriesPopulationGrowth = pg

                const growths = pg.map((i) => i.value);
                const range = d3.extent(growths);

                const maxChange = d3.max([-range[0], range[1]]);

                const colorScale = d3.scaleLinear()
                    .domain([-maxChange, maxChange])
                    .range(["#ff00ff", "#009933"]);

                state.popGrowthScaleColors = growths.map(c => colorScale(c))
            }
        },
        [getPopulationGrowth.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }

})


export const {
    setScaleColors
} = populationSlice.actions
export const populationState = (state) => state.population;
export default populationSlice.reducer;