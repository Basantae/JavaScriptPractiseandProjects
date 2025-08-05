// Initialize user and computer scores to zero
let userScore = 0;
let compScore = 0;

// Select all elements representing user choices (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Select the message element to display game results and status
const msg = document.querySelector("#msg");

// Select elements to display current scores for user and computer
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate a random choice for the computer from the three options
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Handle the case when the game ends in a draw
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31"; // neutral background color
};

// Update scores and display messages based on who wins the round
// Parameters:
// - userWin: boolean indicating if user won
// - userChoice, compChoice: choices made by user and computer respectively
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; // increment user score
    userScorePara.innerText = userScore; // update user score display
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; // display win message
    msg.style.backgroundColor = "green"; // green background for win
  } else {
    compScore++; // increment computer score
    compScorePara.innerText = compScore; // update computer score display
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`; // display loss message
    msg.style.backgroundColor = "red"; // red background for loss
  }
};

// Main game logic to play a round given the user's choice
const playGame = (userChoice) => {
  // 1. Generate the computer's random choice
  const compChoice = genCompChoice();

  // 2. Check for a draw condition
  if (userChoice === compChoice) {
    drawGame(); // display draw message if choices match
  } else {
    // 3. Determine if user won based on game rules:
    // Rock beats scissors, paper beats rock, scissors beat paper
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else { // userChoice === "scissors"
      userWin = compChoice === "rock" ? false : true;
    }

    // 4. Show the result of the round with updated scores and message
    showWinner(userWin, userChoice, compChoice);
  }
};

// Attach click event listeners to each choice element
// On click, extract the user's choice and start the game round
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});