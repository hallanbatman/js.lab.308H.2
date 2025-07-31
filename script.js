// The area in which the plants are contained is circular, with a radius of 5 meters.
const radiusContainedArea = 5;//meters radius
let radius = radiusContainedArea;

// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
console.log (`Initial contained area: ${area} m2.`);

// Each plant requires a minimum space of 0.8 square meters.
let plantSize = 0.8;//square meters

// The area is starting with 20 plants.
let numPlants = 20;//plants

// Initial area size reuqired
let areaOccupied = numPlants*plantSize
console.log (`Initial occupied area size: ${areaOccupied} m2.`)

// The plants double in number every week.
const growthRate = 2*plantSize;//per week
const week = 1

//week 0 = 20 plants
//week 1 = 40 plants
//week 2 = 80 plants
//week 3 = 160 plants

// Objectives

// Predict the plant growth after a specific number of weeks.
// include the results for 1, 2, and 3 weeks of growth as inputs.
console.log(`Total plant size growth in square m2:`)
console.log(`0 Week = ${numPlants*plantSize} m2`)
console.log(`1 Week = ${(numPlants*2)*plantSize} m2`)
console.log(`2 Week = ${(numPlants*3)*plantSize} m2`)
console.log(`3 Week = ${(numPlants*4)*plantSize} m2`)


// Implement control flow to make decisions on whether the plants should be:

// Pruned, to stop them from exceeding the capacity of the garden.
// // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

// Monitored, if they are growing at an acceptable rate.
// //This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

// Planted, if there is room to plant more plants.
// //This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.