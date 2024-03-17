'use strict';


let secretNumber = Math.trunc(Math.random() * 1) + 5;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');

  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! You win $500');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {


     /* displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!'); */
      displayMessage(guess > secretNumber ? '📈 !' : '📉 !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f70505';
      document.querySelector('.number').style.width = '30rem';
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#0576f7';
  document.querySelector('.number').style.width = '15rem';
});


            function Redirect() {
               window.location = "index.html";
            }
