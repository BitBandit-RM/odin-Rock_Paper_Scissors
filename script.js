choice_available = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    choice_rand = Math.floor(Math.random() * 3);
    return choice_available[choice_rand];
}
