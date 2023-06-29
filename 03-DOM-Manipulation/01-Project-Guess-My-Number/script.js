'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = "No number inputed 😢 Try Again!";
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "Correct Number!! 🎉";
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = "Guess is too high!!";
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = "Guess is too low!!;"
    score--;
    document.querySelector('.score').textContent = score;
  }
})
