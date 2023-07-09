// Initialize variables
let score = 0;
let tries = 5;

// Get DOM elements
const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const triesDisplay = document.getElementById('tries');

// Add event listeners to choices
choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});

// Game logic
function playGame(event) {
  if (tries === 0) {
    message.textContent = 'Game over! You ran out of tries.';
    return;
  }

  const userChoice = event.target.id;
  const computerChoice = generateComputerChoice();

  const result = checkResult(userChoice, computerChoice);
  updateUI(userChoice, computerChoice, result);

  tries--;
  triesDisplay.textContent = `Tries left: ${tries}`;

  if (tries === 0) {
    endGame();
  }
}

// Generate computer's choice
function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Check the result
function checkResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  switch (userChoice) {
    case 'rock':
      return computerChoice === 'scissors' || computerChoice === 'lizard'
        ? 'You win!'
        : 'You lose!';
    case 'paper':
      return computerChoice === 'rock' || computerChoice === 'spock'
        ? 'You win!'
        : 'You lose!';
    case 'scissors':
      return computerChoice === 'paper' || computerChoice === 'lizard'
        ? 'You win!'
        : 'You lose!';
    case 'lizard':
      return computerChoice === 'paper' || computerChoice === 'spock'
        ? 'You win!'
        : 'You lose!';
    case 'spock':
      return computerChoice === 'rock' || computerChoice === 'scissors'
        ? 'You win!'
        : 'You lose!';
    default:
      return 'Invalid choice.';
  }
}

// Initialize variables
let userScore = 0;
let computerScore = 0;

// Update the UI
function updateUI(userChoice, computerChoice, result) {
  message.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
  if (result === 'You win!') {
    userScore++;
  } else if (result === 'You lose!') {
    computerScore++;
  }
  scoreDisplay.textContent = `Score: You ${userScore} - Computer ${computerScore}`;
}



// End the game
function endGame() {
  choices.forEach(choice => {
    choice.disabled = true;
  });
}
