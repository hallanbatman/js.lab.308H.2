// The area in which the plants are contained is circular, with a radius of 5 meters.
const radiusContainedArea = 5;//meters radius
let radius = radiusContainedArea;

// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
console.log(`Initial contained area: ${area} m2.`);

const area80 = area * 0.8
console.log(`80% of contained area: ${area80} m2.`);

const area50 = area * 0.5
console.log(`50% of contained area: ${area50} m2.`);

// Each plant requires a minimum space of 0.8 square meters.
let plantSize = 0.8;//square meters

// The area is starting with 20 plants.
let numPlants = 20;//plants

// Initial area size reuqired
let areaOccupied = (numPlants * 1) * plantSize
console.log(`Initial occupied area size: ${areaOccupied} m2.`)

// Check for week 1
let week = 1;
areaOccupied = numPlants * 2; // week 1, plants double
console.log(areaOccupied)

console.log(`week ` + week + `:`)
console.log(`plants ` + plants)


if (plants > area80) {
    console.log(`Action: Prune`);
} else if (plants >= area50) {
    console.log(`  Action: Monitor`);
} else {
    console.log(`Plant more`);
}

// Check for week 2
week = 2;
plants = (numPlants * 2) * 2; // week 2, double again

console.log(`week ` + week + `:`)
console.log(`plants ` + plants)

if (plants > plantSize * area) {
    console.log(`Action: Prune`);
} else if (plants >= 0.5 * area) {
    console.log(`  Action: Monitor`);
} else {
    console.log(`Plant more`);
}




//What's 50% of area?
//What's 880% of area?

// The plants double in number every week.
const growthRate = 2 * numPlants;//per week

// Objectives

// Predict the plant growth after a specific number of weeks.
// include the results for 1, 2, and 3 weeks of growth as inputs.
//console.log(`Total plant size growth in square m2:`)

//week 0 = 20 plants * 0.8 m2 = 16 m2

//week 1 = 40 plants * 0.8 m2 = 32 m2

//week 2 = 80 plants * 0.8 m2 = 64m2

//week 3 = 160 plants * 0.8 m2 = 128m2




// Implement control flow to make decisions on whether the plants should be:

// Pruned, to stop them from exceeding the capacity of the garden.
// // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

// Monitored, if they are growing at an acceptable rate.
// //This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

// Planted, if there is room to plant more plants.
// //This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.