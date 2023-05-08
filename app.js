
// Function to generate random choice for computer.
function getComputerChoice() {
    // Set rock paper and scissors inside an array called possibleChoices.
    let possibleChoices = ["rock", "paper", "scissors"];
    let choice;
    // Pick random choice in the possibleChoices array using a randomly generated number using Math.floor(Math.random() * arraylength).
    choice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    // Return the choice for use outside of the function.
    return choice;
};
