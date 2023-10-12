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
  if (playerScore === 5 || computerScore === 5) {
    return; // El juego ya ha terminado, no hacer nada
  }

  const result = checkingWinner(playerChoice, computerChoice);
  if (result === "Tie") {
    return "It's a Tie!";
  } else if (result === "Player") {
    playerScore++; // Incrementar la puntuación del jugador
    updateScoreboard(); // Actualizar el marcador después de cada ronda
    if (playerScore === 5) {
      announceWinner("¡Player 1 Win!");
      setTimeout(resetGame, 2000); // Reiniciar el juego automáticamente después de 2 segundos
      return;
    }
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++; // Incrementar la puntuación de la computadora
    updateScoreboard(); // Actualizar el marcador después de cada ronda
    if (computerScore === 5) {
      announceWinner("¡Computer Win!");
      setTimeout(resetGame, 10000); // Reiniciar el juego automáticamente después de 2 segundos
      return;
    }
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

// Función para mostrar un resultado en el tablero de puntuación
function displayResult(result) {
  const roundWinnerElement = document.getElementById('round-winner');
  roundWinnerElement.textContent = result;
}

// Función para anunciar al ganador
function announceWinner(message) {
  const winnerMessage = document.getElementById('winner-message');
  winnerMessage.textContent = message;
  setTimeout(function () {
    winnerMessage.textContent = ""; // Limpiamos el contenido del mensaje después de 3 segundos
  }, 3000); // 3000 milisegundos (3 segundos)
}


// Función para reiniciar el juego
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
  document.getElementById('round-winner').textContent = "";
  document.getElementById('winner-message').textContent = "";
  enablePlayerChoices();
}

// Agrega una función para habilitar las elecciones del jugador
function enablePlayerChoices() {
  document.getElementById('rock-button').disabled = false;
  document.getElementById('paper-button').disabled = false;
  document.getElementById('scissors-button').disabled = false;
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
