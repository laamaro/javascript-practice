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
