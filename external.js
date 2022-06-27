
// Computer selection function

function computerChoice() {
    const rpsArray = ["rock", "paper", "scissors"];
    const computerSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    console.log(computerSelection());
}

// Player selection function 

function playerChoice() {
    const playerChoice = prompt('Please type "rock, paper, or scissors').toLocaleLowerCase();
}

// Playing a single round 

function singleRound(playerChoice, computerChoice) {
    computerPlay();
} 

// Winner Declaration

function winnerDeclaration (playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You selected rock. Captain Goldfinch selected scissors. You WON!")
    }
        (playerChoice === "rock" && computerChoice === "paper") {
            console.log("You selected rock. Captain Goldfinch selected paper. Captain Goldfinch WON!")
    }

    (playerChoice === "rock" && computerChoice === "rock") {
        console.log("You selected rock. Captain Goldfinch selected rock. It's a tie!")
    }
    (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You selected paper. Captain Goldfinch selected rock. You WON!")
    }
    (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("You selected paper. Captain Goldfinch selected scissors. Captain Goldfinch WON!")
    }
(playerChoice === "paper" && computerChoice === "paper") {
    console.log("You selected paper. Captain Goldfinch selected paper. It's a tie!")
    }
    (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("You selected scissors. Captain Goldfinch selected rock. Captain Goldfinch WON!")
    }
    (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You selected scissors. Captain Goldfinch selected paper. You WON!")
    }
(playerChoice === "scissors" && computerChoice === "scissors") {
    console.log("You selected scissors. Captain Goldfinch selected scissors. It's a tie!")
    }

}


console.log(singleRound());




    // const rpsArray = ["Rock", "Paper", "Scissors"];
    // const playerCue = "Please select an object";
    // const playerSelection = "rock"; 
    // const computerSelection = computerPlay();
    // console.log(singleRound(playerSelection, computerSelection));


    // if computerSelection === "Rock"
    // else if
    // if computerSelection === "Paper"
    // if computerSelection === "Scissors"

    // if playerSelection === "Rock"
    // if playerSelection === "Paper"
    // if playerSelection === "Scissors"







// Initial Screen: Input name. 

// Next screen: 

// "Shiver me timbers! If it ain't my old nemesis _______."

// "The WINNER gets gold"
// "The LOSER walks the plank"



// "Beat Captain Goldfinch to win his pot of gold!"

// "You lost landlubber. Time to walk the plank."

// "Blimey! Ye beat me scallywag."



// I can do this within the console, then adapt to the neccessary UI for the second part of the project 

// Writing the Algorithm: 
// 1. Ask user to input name
// new page
// 2. Program takes inputted name and inserts into story
// 3. User hits next button
// new page
// 4. The user selects the icon of their choice (rock, paper, scissors)
// 5. The computer randomly selects an icon from the array
// 6. The program is inputted with the information that rock beats paper for example
// 7. A point counter displays who wins
// 8. Corresponding text is displayed to aid the narrative. 
// new page
// 9. Once USER or CPU hits 5 points, the end text is displayed from a choice of two depending on the winner 