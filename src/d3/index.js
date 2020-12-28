import * as d3 from "d3";

const popGrowthPath = `${process.env.PUBLIC_URL}/data/pop.growth2019.csv`


// export const popGrowthData = async () => {
//     try {
//         const data = await d3.csv(popGrowthPath)
//         return data
//     } catch (error) {
//         console.log('error :>>', error)
//     }
// }




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

// // console.log('pathGenerator :>>', pathGenerator(sphere))
// // console.log('bounds path :>> ', pathGenerator.bounds(sphere));

const [
    [x0, y0],
    [x1, y1]
] = pathGenerator.bounds(sphere)

dimensions.boundedHeight = y1
dimensions.height = dimensions.boundedHeight + dimensions.margin.bottom + dimensions.margin.top


// // const wrapper = d3.select("#wrapper")
// //     .append("svg")
// //     .attr("width", dimensions.width)
// //     .attr("height", dimensions.height)

// // const bounds = wrapper.append("g")
// //     .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)

const bounds = `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`







export const canvas = {
    dimensions,
    bounds,
}