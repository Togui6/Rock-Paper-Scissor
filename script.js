console.log("Hello")

let computerNumber = 1;

function getComputerChoice() {
    computerNumber = Math.floor(Math.random()* 3) + 1;
    console.log(computerNumber);
    if (computerNumber === 1) {
        computerNumber = "rock";
    } else if (computerNumber === 2) {
        computerNumber = "paper";
    } else {
        computerNumber = "scissor"
    }
console.log("The AI picked " + computerNumber);
}

function getHumanChoice () {
    let humanNumber = prompt("Pick between Rock, Paper or Scissor");
    humanNumber = humanNumber.toLowerCase();
    if (humanNumber === "rock") {
    } else if (humanNumber === "paper") {
    } else if (humanNumber === "scissor") {
    } else {
        console.log("Please try again");
    }
        console.log("You picked " + humanNumber);
}
