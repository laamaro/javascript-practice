'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = "No number inputed 😢 Try Again!";

  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "Correct Number!! 🎉";
    document.querySelector('body').style.backgroundColor = '#23d438';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = secretNumber;

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = "Guess is too high!!";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "You lost the game 😢"
      document.querySelector('.score').textContent = 0;
    }

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = "Guess is too low!!;"
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = "You lost the game 😢"
      document.querySelector('.score').textContent = 0;
    }
  }
})

// When player clicks on 'again' button
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
