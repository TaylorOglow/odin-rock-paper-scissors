 
// Creating a random outcome of rock paper or scissors 

let computerScore = 0;
let playerScore = 0;
let roundNum = 1;

function computerPlay() {
    const array = ["rock", "paper", "scissors"];
    let compSelection = array[Math.floor(Math.random() * array.length)];
    return(compSelection);
}
// Coding the winner logic of the round 

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )
    {   
        const winningMessage = `You selected ${playerSelection}, the computer selected ${computerSelection}. You WIN!`;
        const roundMessage = `At the end of Round ${roundNum} the score is User | ${playerScore} CPU | ${computerScore}.`;
        playerScore++;
        roundNum++;
        console.log(winningMessage, roundMessage);
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
     )
      {
        const losingMessage = `You selected ${playerSelection}, the computer selected ${computerSelection}. You LOSE!`
        const roundMessage = `At the end of Round ${roundNum} the score is User | ${playerScore} CPU | ${computerScore}.`;
        computerScore++;
        roundNum++;
        console.log(losingMessage, roundMessage);
    } else {
        const neutralMessage = `You both selected ${playerSelection}. It's a draw!`;
        const roundMessage = `At the end of Round ${roundNum} the score is User | ${playerScore} CPU | ${computerScore}.`;
        roundNum++;
        console.log(neutralMessage, roundMessage);
    }
}

// Using the single game function and adding a five game cap

function game() {
    let playerSelection = prompt("CHOOSE YOUR WEAPON: Type Rock, Paper, or Scissors")
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You WON! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You LOST. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}

game();