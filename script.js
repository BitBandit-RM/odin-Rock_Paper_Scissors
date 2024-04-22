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
