

let choices = ["Rock", "Paper", "Scissors"];


let playerScore = 0;
let computerScore = 0;

function updateScoreboard() {
  const playerScoreElement = document.getElementById('Player1');
  const computerScoreElement = document.getElementById('Computer');

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function computerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkingWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerScore === 5 || computerScore === 5) {
    return; 
  }

  const result = checkingWinner(playerChoice, computerChoice);
  if (result === "Tie") {
    return "It's a Tie!";
  } else if (result === "Player") {
    playerScore++; 
    updateScoreboard(); 
    if (playerScore === 5) {
      announceWinner("Player 1 Win");
      setTimeout(resetGame, 2000); 
      return;
    }
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++; 
    updateScoreboard(); 
    if (computerScore === 5) {
      announceWinner("Computer Win");
      setTimeout(resetGame, 10000); 
      return;
    }
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}


function displayResult(result) {
  const roundWinnerElement = document.getElementById('round-winner');
  roundWinnerElement.textContent = result;
}


function announceWinner(message) {
  const winnerMessage = document.getElementById('winner-message');
  winnerMessage.textContent = message;
  setTimeout(function () {
    winnerMessage.textContent = ""; 
  }, 3000); // 
}



function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
  document.getElementById('round-winner').textContent = "";
  document.getElementById('winner-message').textContent = "";
  enablePlayerChoices();
}


function enablePlayerChoices() {
  document.getElementById('rock-button').disabled = false;
  document.getElementById('paper-button').disabled = false;
  document.getElementById('scissors-button').disabled = false;
}

document.getElementById('rock-button').addEventListener('click', function () {
  handlePlayerChoice('Rock');
});

document.getElementById('paper-button').addEventListener('click', function () {
  handlePlayerChoice('Paper');
});

document.getElementById('scissors-button').addEventListener('click', function () {
  handlePlayerChoice('Scissors');
});

function handlePlayerChoice(playerChoice) {
  if (playerScore < 5 && computerScore < 5) {
    console.log(`Jugador eligió: ${playerChoice}`);
    const computerSelection = computerChoice();
    const result = playRound(playerChoice, computerSelection);
    displayResult(result);
  }
}


function game() {
  console.log("Welcome!");
}


game();
