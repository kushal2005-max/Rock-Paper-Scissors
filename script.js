// script.js
let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-pick").textContent = userChoice;
  document.getElementById("computer-pick").textContent = computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
    setResultStyle("gray");
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win!";
    userScore++;
    document.getElementById("user-score").textContent = userScore;
    setResultStyle("green");
  } else {
    result = "You Lose!";
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
    setResultStyle("red");
  }

  document.getElementById("result").textContent = result;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = 0;
  document.getElementById("computer-score").textContent = 0;
  document.getElementById("result").textContent = "Make your move!";
  document.getElementById("user-pick").textContent = "-";
  document.getElementById("computer-pick").textContent = "-";
  setResultStyle("black");
}

function setResultStyle(color) {
  document.getElementById("result").style.color = color;
}
