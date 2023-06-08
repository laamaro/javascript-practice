// Values and Variables
const country = 'Brasil';
const continent = 'South America';
let populationBr = 214000000;

// Data Type
const isIsland = false;
const language = 'Portuguese';
console.log(typeof isIsland, typeof populationBr, typeof country, typeof language);

// Basic Operators
let halfPopulation = populationBr / 2;
console.log(halfPopulation);
console.log(populationBr++);
let populationFinland = 6000000;
console.log(populationBr > populationFinland);
const avgPopulation = 33000000;
console.log(populationBr < avgPopulation);
const description = country + " is in " + continent + ", and its " + populationBr + " people that speak " + language;
console.log(description);
