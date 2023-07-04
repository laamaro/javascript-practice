'use strict';

// Select elements we'll use
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

// Starting the game
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');
