console.log("Aprendiendo");

let choices = ["Rock", "Paper", "Scissors"];

// Variables para llevar un registro de las puntuaciones
let playerScore = 0;
let computerScore = 0;

// Función para actualizar el marcador en el HTML
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
  const result = checkingWinner(playerChoice, computerChoice);
  if (result === "Tie") {
    return "It's a Tie!";
  } else if (result === "Player") {
    playerScore++; // Incrementar la puntuación del jugador
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++; // Incrementar la puntuación de la computadora
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

// Función para mostrar un resultado en el tablero de puntuación
function displayResult(result) {
  const roundWinnerElement = document.getElementById('round-winner');
  roundWinnerElement.textContent = result;

  // Actualizar el marcador después de cada ronda
  updateScoreboard();

  // Verificar si un jugador ha ganado 5 veces para finalizar el juego
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

// Función que muestra al ganador del juego
function endGame() {
  const winnerMessage = document.getElementById('winner-message');
  if (playerScore === 5) {
    winnerMessage.textContent = "¡El jugador ha ganado el juego!";
  } else if (computerScore === 5) {
    winnerMessage.textContent = "¡La computadora ha ganado el juego!";
  }
}

// Función para reiniciar el juego
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
  document.getElementById('round-winner').textContent = "";
  document.getElementById('winner-message').textContent = "";
}

// Asociar eventos de clic a los botones de elección del jugador
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

// Función que maneja el juego completo
function game() {
  console.log("Welcome!");
}

// Iniciar el juego
game();
