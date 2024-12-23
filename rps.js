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

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock.";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "You lose! Scissors beats paper.";
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "You lose! Paper beats rock.";
    } 
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);