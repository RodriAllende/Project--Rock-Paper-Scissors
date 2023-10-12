console.log("Aprendiendo");

let choices = ["Rock", "Paper", "Scissors"];

function computerchoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkingWinner(playerchoice, computerchoice) {
  const playerWins = 
    (playerchoice == "Rock" && computerchoice == "Scissors") ||
    (playerchoice == "Scissors" && computerchoice == "Paper") ||
    (playerchoice == "Paper" && computerchoice == "Rock");

  if (playerchoice == computerchoice) {
    return "Tie";
  } else if (playerWins) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerchoice, computerchoice) {
  const result = checkingWinner(playerchoice, computerchoice);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerchoice} beat ${computerchoice}`;
  } else {
    return `You lose! ${computerchoice} beat ${playerchoice}`;
  }
}

function displayResult(result) {
  const scoreBoard = document.getElementById('score-board');
  const resultElement = document.createElement('p');
  resultElement.textContent = result;
  scoreBoard.appendChild(resultElement);
}

function handlePlayerChoice(playerChoice) {
  console.log(`Jugador eligió: ${playerChoice}`);
  const computerSelection = computerchoice();
  const result = playRound(playerChoice, computerSelection);
  displayResult(result);
}

// Asociar eventos de clic a los botones de elección del jugador
document.getElementById('rock-button').addEventListener('click', function() {
  handlePlayerChoice('Rock');
});

document.getElementById('paper-button').addEventListener('click', function() {
  handlePlayerChoice('Paper');
});

document.getElementById('scissors-button').addEventListener('click', function() {
  handlePlayerChoice('Scissors');
});

// Función que maneja el juego completo
function game() {
  console.log("Welcome!");

  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    // Simular elección del jugador a través del evento de clic
    // No es necesario obtener la elección del jugador aquí
    // Las elecciones se manejarán a través de los eventos de clic
    const computerselection = computerchoice();

    console.log(playRound(computerselection, "Rock")); // Cambia esto para reflejar la elección real del jugador

    const winner = checkingWinner("Rock", computerselection); // Cambia "Rock" por la elección real del jugador
    if (winner == "Player") {
      playerScore++;
    } else if (winner == "Computer") {
      computerScore++;
    }
  }

  console.log("Game over!");

  if (playerScore > computerScore) {
    console.log("Player was the winner!");
  } else if (playerScore < computerScore) {
    console.log("Computer was the winner!");
  } else {
    console.log("We have a tie!");
  }
}

// Iniciar el juego
game();
