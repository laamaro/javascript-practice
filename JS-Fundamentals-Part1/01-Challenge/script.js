/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMTJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMTJohn);
