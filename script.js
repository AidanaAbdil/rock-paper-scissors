// Pseudocode:
// Create a new function named getComputerChoice.
// Inside the function:
// Use the Math.random() method to generate a random number between 0 and 1.
// Multiply the random number by 3 to scale the number between 0 and 2.999....
// Use Math.floor() to round down the result to a whole number (either 0, 1, or 2).
// Set conditions:
// If the random number is 0, return "rock".
// If the random number is 1, return "paper".
// If the random number is 2, return "scissors".
// Test the function by calling console.log(getComputerChoice()) to see if it returns the expected value.


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if( random === 0){
        console.log('rock');
        
    }else if (random === 1){
        console.log('paper');
        
    }else {
        console.log('scissors');
        
    }

}
getComputerChoice();


function getHumanChoice (){

  let humanChoice =  prompt('Please enter rock, paper or scissors!')
  humanChoice = humanChoice.toLowerCase();

  if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
    return humanChoice;
    
  }else {
    alert('Invalid choice, please enter rock, paper or scissors!')
    
  }
}
console.log(getHumanChoice());



function playRound(humanChoice, computerChoice) {
    // Compare choices and determine the winner
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return { humanScore, computerScore }; // Return current scores
    }

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        } else {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        } else {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        }
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }

    return { humanScore, computerScore }; // Return updated scores
}

function playGame (){
   let humanScore = 0;
   let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round} : `);
        

        const humanSelection = getHumanChoice();   // Function to get human input
        const computerSelection = getComputerChoice(); // Function to get computer choice

        playRound(humanSelection, computerSelection);

        
    }
    
    console.log('FinalScores: ');
    console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
    
    
    if(humanScore > computerScore){
        console.log('You are the winner!');
        
    }else if (computerScore > humanScore){
        console.log('Computer is the winner!');
        
    }else {
        console.log('Its a tie!');
        
    }
}

playGame();