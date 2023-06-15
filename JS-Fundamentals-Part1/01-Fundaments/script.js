// Values and Variables
const country = 'Brasil';
const continent = 'South America';
let populationBr = 214;

// Data Type
const isIsland = false;
const language = 'Portuguese';
console.log(typeof isIsland, typeof populationBr, typeof country, typeof language);

// Basic Operators
let halfPopulation = populationBr / 2;
console.log(halfPopulation, populationBr++);
let populationFinland = 60;
console.log(populationBr > populationFinland);
const avgPopulation = 33;
console.log(populationBr < avgPopulation);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${populationBr} people that speak ${language}!`;
console.log(description);

// Taking decisions: if/else statements
if (populationBr > avgPopulation) {
  console.log(`${country}'s population is above avarage!`);
} else {
  console.log(`${country}'s population is ${avgPopulation - populationBr} million bellow the avarage...`);
}

// Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border!');
// } else {
//   console.log('No borders!');
// }

// Logical Operators
if (populationBr > 50 && language === 'English' && !isIsland) {
  console.log('Sara should live in Brasil!');
} else {
  console.log('Brasil is not the right country for Sara :(');
}
