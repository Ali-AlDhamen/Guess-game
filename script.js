'use strict';

// document.querySelector('.number').textContent = secretN; for testing

let secretN = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('NO NUMBER!');
  } else if (guess === secretN) {
    document.querySelector('.number').textContent = secretN;
    displayMessage('CORRECT NUMBER!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  // doing one if statment for both low and high to remove dup
  else if (guess !== secretN) {
    displayMessage(guess > secretN ? 'TOO HIGH!' : 'TOO LOW!');
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      document.querySelector('.heado').textContent = 'THE NUMBER WAS';
      document.querySelector('.number').textContent = secretN;
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('YOU LOST!');
      displayScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretN = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});
