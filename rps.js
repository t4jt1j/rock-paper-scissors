function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// console.log("Computer chose " + getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ");
    return choice.toLowerCase();
}

// console.log("You chose " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice);
    console.log("Computer chose " + computerChoice);
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return "Computer wins!";
        } else {
            humanScore++;
            return "You win!";
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return "Computer wins!";
        } else {
            humanScore++;
            return "You win!";
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return "Computer wins!";
        } else {
            humanScore++;
            return "You win!";
        }
    } else {
        return "Invalid choice!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection));
console.log("Human score: " + humanScore);
console.log("Computer score: " + computerScore);