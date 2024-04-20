let choice_available = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let choice_rand = Math.floor(Math.random() * 3);
    return choice_available[choice_rand];
}
console.log(getComputerChoice())
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());