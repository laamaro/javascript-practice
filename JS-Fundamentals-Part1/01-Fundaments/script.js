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
console.log(halfPopulation);
console.log(populationBr++);
let populationFinland = 60;
console.log(populationBr > populationFinland);
const avgPopulation = 33;
console.log(populationBr < avgPopulation);
let description = country + " is in " + continent + ", and its " + populationBr + " million people that speak " + language;
console.log(description);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${populationBr} people that speak ${language}!`;
console.log(description);

// Taking decisions: if/else statements
if (populationBr > avgPopulation) {
  console.log(`${country}'s population is above avarage!`);
} else {
  console.log(`${country}'s population is ${avgPopulation - populationBr} million bellow the avarage...`);
}
