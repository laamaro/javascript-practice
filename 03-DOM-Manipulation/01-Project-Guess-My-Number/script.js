'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage("No number inputed 😢 Try Again!");;

  } else if (guess === secretNumber) {
    displayMessage("Correct Number!! 🎉");
    document.querySelector('body').style.backgroundColor = '#23d438';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Guess is too high!!" : "Guess is too low!!");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("You lost the game 😢");
      document.querySelector('.score').textContent = 0;
    }
  }
})

// When player clicks on 'again' button
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
