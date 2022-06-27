
function computerPlay() {
    const rpsArray = ["Rock", "Paper", "Scissors"];
    const rpsRandom = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    console.log(rpsRandom);
}
computerPlay(); 

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