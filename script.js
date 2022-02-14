'use strict';
const Thehhead = document.querySelector('.heado');
const number = document.querySelector('.number');
const guess1 = document.querySelector('.guess');
const score1 = document.querySelector('.score');
const highscore1 = document.querySelector('.highscore');
const message1 = document.querySelector('.message');
const check = document.querySelector('.check');
const body = document.querySelector('body');

// document.querySelector('.number').textContent = secretN; for testing

let secretN = Math.trunc(Math.random() * 100) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  message1.textContent = message;
};
const displayScore = function (score) {
  score1.textContent = score;
};

check.addEventListener('click', function () {
  const guess = Number(guess1.value);

  if (!guess) {
    displayMessage('NO NUMBER!');
  } else if (guess === secretN) {
    number.textContent = secretN;
    displayMessage('CORRECT NUMBER!');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    highscore1.textContent = highscore;
  }
  // doing one if statment for both low and high to remove dup
  else if (guess !== secretN) {
    displayMessage(guess > secretN ? 'TOO HIGH!' : 'TOO LOW!');
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      Thehhead.textContent = 'THE NUMBER WAS';
      number.textContent = secretN;
      body.style.backgroundColor = 'red';
      displayMessage('YOU LOST!');
      displayScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 5;

  secretN = Math.trunc(Math.random() * 100) + 1;
  guess1.value = '';
  number.textContent = '?';
  displayScore(score);
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
});
// uploaded again
