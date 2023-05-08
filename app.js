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
      return "You Lose, Paper beats Rock";
    } else {
      return "You Win, Rock beats Scissors";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "You Lose, Scissors beats Paper";
    } else {
      return "You Win, Paper beats Rock";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You Lose, Rock beats Scissors";
    } else {
      return "You Win, Scissors beats Paper";
    }
    // Else to Cover faulty Inputs out of range of IF Statement.
  } else {
    return "Issue with Input";
  }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
