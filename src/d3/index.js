import * as d3 from "d3";
// const countries = "./data/world.geojson.json"

// const countryShapes = d3.json(countries, data => console.log(data))



const popGrowthCSV = "./data/pop.growth2019.csv"

const countryShapes = d3.csv(popGrowthCSV, data => data)


let dimensions = {
    width: window.innerWidth * 0.9,
    margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    }
}

dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right

const sphere = ({
    type: "Sphere"
})

const projection = d3.geoEqualEarth()
    .fitWidth(dimensions.boundedWidth, sphere)

const pathGenerator = d3.geoPath(projection)

// console.log('pathGenerator :>>', pathGenerator(sphere))
// console.log('bounds path :>> ', pathGenerator.bounds(sphere));

const [
    [x0, y0],
    [x1, y1]
] = pathGenerator.bounds(sphere)

dimensions.boundedHeight = y1
dimensions.height = dimensions.boundedHeight + dimensions.margin.bottom + dimensions.margin.top


// const wrapper = d3.select("#wrapper")
//     .append("svg")
//     .attr("width", dimensions.width)
//     .attr("height", dimensions.height)

// const bounds = wrapper.append("g")
//     .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)


export const canvas = {
    dimensions,
}
