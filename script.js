console.log("Hello")

let computerNumber = 1;
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {

    if (humanChoice === computerChoice) {
        console.log("Equality !");

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose ! Paper beats rock, you suck.");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win ! Rock beats scissor.");

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win ! Paper beats rock.");
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You lose ! Scissor beats paper you moron.");
        
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose ! Rock beats scissor, come back when you're smarter.");
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win ! Scissor beats paper.");
        
    } else {
        console.log("Something went wrong lol");
    }    

}

// Le jeu marche mais ça affiche toujours Equality peu importe le résultat