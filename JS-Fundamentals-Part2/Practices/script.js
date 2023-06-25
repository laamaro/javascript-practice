// Functions
function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`
  return description;
}

console.log(describeCountry('Brazil', 214, 'Brasília'));

// Function Declarations vs. Expressions
// Declaration
function percentageOfWorld1(population) {
  const percentage = (population / 7900) * 100
  return percentage;
}
console.log(percentageOfWorld1(214));

// Expression
const percentageOfWorld2 = function (population) {
  const percentage = (population / 7900) * 100
  return percentage;
}
console.log(percentageOfWorld2(1441));

// Arrow
const percentageOfWorld3 = population => population / 7900;
console.log(percentageOfWorld3(32));

// Functions Calling Other Functions
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}
console.log(describePopulation('Brazil', 214));
