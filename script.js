console.log("Hello")

let computerNumber = 1;
let humanNumber = "";
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const content = document.createElement("div");
content.setAttribute("id", "content");


function updateScoreDisplay() {
const humanDisplay = document.getElementById("humanDisplay");
humanDisplay.textContent = `Your score : ${humanScore}`;
const computerDisplay = document.getElementById("computerDisplay");
computerDisplay.textContent = `AI score : ${computerScore}`;
}

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

function winCondition() {
    updateScoreDisplay();   
    if (humanScore == 5) {
        alert("You've won the match !");
        humanScore = 0;
        computerScore = 0;
        updateScoreDisplay();
    } else if (computerScore == 5) {
        alert("You've lost the match, you suck.");
        humanScore = 0;
        computerScore = 0;
        updateScoreDisplay();
    } else {

    }
}


function playRound(computerChoice = getComputerChoice()) {

    if (humanNumber === computerNumber) {
        console.log("Equality!");
        content.textContent = "It's an equality!";
        content.style.color = "purple";


    } else if (humanNumber === "rock" && computerNumber === "paper") {
        console.log("You lose ! Paper beats rock, you suck.");
        ++computerScore;
        content.textContent = "You lost!";
        content.style.color = "red";
        

    } else if (humanNumber === "rock" && computerNumber === "scissor") {
        console.log("You win ! Rock beats scissor.");
        ++humanScore
        content.textContent = "You won!";
        content.style.color = "green";
        

    } else if (humanNumber === "paper" && computerNumber === "rock") {
        console.log("You win ! Paper beats rock.");
        ++humanScore
        content.textContent = "You won!";
        content.style.color = "green";
        

    } else if (humanNumber === "paper" && computerNumber === "scissor") {
        console.log("You lose ! Scissor beats paper you moron.");
        ++computerScore
        content.textContent = "You lost!";
        content.style.color = "red";
        

       
    } else if (humanNumber === "scissor" && computerNumber === "rock") {
        console.log("You lose ! Rock beats scissor, come back when you're smarter.");
        ++computerScore
        content.textContent = "You lost!";
        content.style.color = "red";
        

    } else if (humanNumber === "scissor" && computerNumber === "paper") {
        console.log("You win ! Scissor beats paper.");
        ++humanScore
        content.textContent = "You won!";
        content.style.color = "green";
        
        
    } else {
        console.log("Something went wrong lol");
    }    

    updateScoreDisplay();
    container.appendChild(content);

}

// function playGame() {
//    let humanScore = 0;
//    let computerScore = 0;
//    let numberofRound = 0;
    
// placeholder for playRound()

//    if (humanScore === computerScore) {
  //      console.log("THE MATCH ENDS EQUAL");
//    } else if (humanScore < computerScore) {
 //       console.log("YOU LOST THE MATCH");
 //   } else {
  //      console.log("YOU WON THE MATCH");
 //   }
// humanScore = 0;
// computerScore = 0;
// }

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    humanNumber = "rock";
    playRound();
    winCondition();
}) 

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    humanNumber = "paper";
    playRound();
    winCondition();
}) 

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
    humanNumber = "scissor";
    playRound();
    winCondition();
}) 