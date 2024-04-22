let choice_available = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice_rand = Math.floor(Math.random() * 3);
    return choice_available[choice_rand];
}
