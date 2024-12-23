function playGame() {
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
    
    function getHumanChoice() {
        let choice = prompt("Choose rock, paper, or scissors: ");
        return choice.toLowerCase();
    }
    
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
    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();

