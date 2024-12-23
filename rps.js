function getComputerChoice() {
    computerChoice = Math.random();
    if (computerChoice < 0.333) {
        return "rock";
    } else if (computerChoice <= 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log("Computer chose " + getComputerChoice());

let getHumanChoice = prompt("Choose rock, paper, or scissors: ");

console.log("You chose " + getHumanChoice);

let humanScore = 0;

let computerScore = 0;