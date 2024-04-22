let choice_available = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice_rand = Math.floor(Math.random() * 3);
    return choice_available[choice_rand];
}

function getHumanChoice() {
    let choice = prompt(`Enter your choice between: ${choice_available}`).toLowerCase();
    while (choice!=="rock" && choice!=="paper" && choice!=="scissors") {
        choice = prompt(`Invalid input!! Try Again!! Available choices: ${choice_available}`).toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice) {
        console.log("Its a tie!!");
    } else if ( (humanChoice==="rock" && computerChoice==="scissors")
      || (humanChoice==="paper" && computerChoice==="rock")
      || (humanChoice==="scissors" && computerChoice==="paper") ) {
        humanScore++;
        console.log(`You win!! Conputer lose!! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose!! Computer win!! ${computerChoice} beats ${humanChoice}`);
    }
}
