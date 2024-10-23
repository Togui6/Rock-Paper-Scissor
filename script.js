console.log("Hello")

let computerNumber = 1;
let humanNumber = "rock";

function getComputerChoice() {
    computerNumber = Math.floor(Math.random()* 3) + 1;
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
    humanNumber = prompt("Pick between Rock, Paper or Scissor");
    humanNumber = humanNumber.toLowerCase();
    if (humanNumber === "rock" || "paper" || "scissor") {
        console.log("You picked " + humanNumber);
    } else {
        console.log("Please try again");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let numberofRound = 0;
    
    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {

        if (humanNumber === computerNumber) {
            console.log("Equality!");

    
        } else if (humanNumber === "rock" && computerNumber === "paper") {
            console.log("You lose ! Paper beats rock, you suck.");
            computerScore++;

        } else if (humanNumber === "rock" && computerNumber === "scissor") {
            console.log("You win ! Rock beats scissor.");
            humanScore++
    
        } else if (humanNumber === "paper" && computerNumber === "rock") {
            console.log("You win ! Paper beats rock.");
            humanScore++

        } else if (humanNumber === "paper" && computerNumber === "scissor") {
            console.log("You lose ! Scissor beats paper you moron.");
            computerScore++

           
        } else if (humanNumber === "scissor" && computerNumber === "rock") {
            console.log("You lose ! Rock beats scissor, come back when you're smarter.");
            computerScore++

        } else if (humanNumber === "scissor" && computerNumber === "paper") {
            console.log("You win ! Scissor beats paper.");
            humanScore++
            
        } else {
            console.log("Something went wrong lol");
        }    

    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore === computerScore) {
        console.log("THE MATCH ENDS EQUAL");
    } else if (humanScore < computerScore) {
        console.log("YOU LOST THE MATCH");
    } else {
        console.log("YOU WON THE MATCH");
    }
humanScore = 0;
computerScore = 0;
}
    