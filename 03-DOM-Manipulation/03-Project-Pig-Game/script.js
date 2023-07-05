'use strict';

// Select elements we'll use
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

const scores = [0, 0];
let currentScore = 0;
let activePLayer = 0;

// Starting the game
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

// Rolling the dice
rollDice.addEventListener('click', () => {
  // Generate random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    // Add number to current score
    currentScore += diceNumber;
    document.getElementById(`current--${activePLayer}`).textContent = currentScore;
  } else {
    // Switch player
    document.getElementById(`current--${activePLayer}`).textContent = 0;
    activePLayer = activePLayer === 0 ? 1 : 0;
    currentScore = 0;
  }
})
