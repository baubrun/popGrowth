import * as d3 from "d3";


let dimensions = {
    boundedWidth: null,
    boundedHeight: null,
    margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    },
    width: window.innerWidth * 0.9,
}

dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right

const sphere = ({
    type: "Sphere"
})

const projection = d3.geoEqualEarth()
    .fitWidth(dimensions.boundedWidth, sphere)

const pathGenerator = d3.geoPath(projection)


dimensions.boundedHeight = pathGenerator.bounds(sphere)[1][1]
dimensions.height = dimensions.boundedHeight + dimensions.margin.bottom + dimensions.margin.top


const bounds = `translate(${dimensions.margin.left}, ${dimensions.margin.top})`

const graticuleJson = d3.geoGraticule10()


export const canvas = {
    dimensions,
    bounds,
    path: pathGenerator(sphere),
    graticule: pathGenerator(graticuleJson),
    pathGenerator,
}