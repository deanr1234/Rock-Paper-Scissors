// Assign variables for score tracking for both the player and computer.
let playerScore = 0;
let computerScore = 0;

// Function to generate random choice for computer.
function getComputerChoice() {
  // Set rock paper and scissors inside an array called possibleChoices.
  let possibleChoices = ["rock", "paper", "scissors"];
  let choice;
  // Pick random choice in the possibleChoices array using a randomly generated number using Math.floor(Math.random() * arraylength).
  choice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
  // Return the choice for use outside of the function.
  return choice;
}

// Function to play a single round.
function playRound(playerSelection, computerSelection) {
  // Change user and computer selection to lowercase to ensure conformity while comparing.
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // If statement for game rock paper scissors game logic
  if (playerSelection == computerSelection) {
    return "It's a Tie";
    // Outer IF Statement is player choice
  } else if (playerSelection == "rock") {
    // Inner IF Statement is computer choice
    if (computerSelection == "paper") {
      computerScore++;
      return "You Lose, Paper beats Rock";
    } else {
      playerScore++;
      return "You Win, Rock beats Scissors";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      return "You Lose, Scissors beats Paper";
    } else {
      playerScore++;
      return "You Win, Paper beats Rock";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore++;
      return "You Lose, Rock beats Scissors";
    } else {
      playerScore++;
      return "You Win, Scissors beats Paper";
    }
    // Else to Cover Inputs out of range of IF Statement.
  } else {
    return "Issue with Input";
  }
}

// Function to play a 5 round game
function game() {
  // Use Do while loop to loop while both player score and computer scores are less than 5
  do {
    const playerSelection = prompt("Please enter your Selection");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  } while (playerScore < 5 && computerScore < 5);

  if (playerScore > computerScore) {
    return "Player wins";
  } else {
    return "Computer wins";
  }
}

console.log(game());
