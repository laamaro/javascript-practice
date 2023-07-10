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
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
let activePLayer = 0;
let playing = true;

// Starting the game
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling the dice
rollDice.addEventListener('click', () => {
  if (playing) {
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
      switchPlayer();
    }
  }
})

hold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player score
    scores[activePLayer] += currentScore;
    document.getElementById(`score--${activePLayer}`).textContent = scores[activePLayer];

    // CHeck if player's score is >= 100
    if (scores[activePLayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      // finish game if it is
      document.querySelector(`.player--${activePLayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePLayer}`).classList.remove('player--active');
    } else {
      // switch player if it isn't;
      switchPlayer();
    }
  }
})
