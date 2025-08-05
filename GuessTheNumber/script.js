// Workflow:
// 1. User enters a guess and clicks submit.
// 2. validateGuess() checks input and processes guess.
// 3. displayGuess() shows guess and updates attempts.
// 4. checkGuess() gives feedback or ends game if correct.
// 5. If attempts run out, endGame() disables input and shows restart.
// 6. newGame() resets everything for a new round.









// Generate a random number between 1 and 100 for the user to guess
let random = parseInt(Math.random() * 100 + 1);

// Get references to DOM elements for interaction and display
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for guesses
const guessSlot = document.querySelector('.guesses'); // Display previous guesses
const remaining = document.querySelector('.lastResult'); // Display remaining attempts
const lowOrHi = document.querySelector('.lowOrHi'); // Display hint messages
const startOver = document.querySelector('.resultParas'); // Container for new game button

// Create a paragraph element for the 'New Game' button
const p = document.createElement('p');

// Initialize game state variables
let prevGuesses = []; // Store previous guesses
let numGuesses = 1; // Track number of guesses made
let playGame = true; // Flag to check if game is active

// Add event listener to submit button if the game is active
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInput.value); // Get user's guess as a number
        validateGuess(guess); // Validate and process the guess
    });
}

/**
 * Validate the user's guess input.
 * Checks for valid number and range, then processes the guess.
 * @param {number} guess - The user's guessed number
 */
function validateGuess(guess) {
    if (isNaN(guess)) { // Check if input is not a number
        alert('Please enter a valid number');
    } else if (guess < 1) { // Check if input is below range
        alert('Please enter a number more than 1');
    } else if (guess > 100) { // Check if input is above range
        alert('Please enter a number less than 100');
    } else {
        prevGuesses.push(guess); // Store valid guess
        if (numGuesses === 11) { // Check if max attempts reached
            displayGuess(guess); // Display last guess
            displayMessage(`Game Over. Random number was ${random}`); // Show game over message
            endGame(); // End the game
        } else {
            displayGuess(guess); // Display guess
            checkGuess(guess); // Check if guess is correct
        }
    }
}

/**
 * Check if the user's guess matches the random number.
 * Provides feedback if guess is too high or too low.
 * @param {number} guess - The user's guessed number
 */
function checkGuess(guess) {
    if (guess === random) { // Correct guess
        displayMessage(`🎉 Congratulations! ${guess} is correct!`);
        endGame(); // End the game
    } else if (guess < random) { // Guess is too low
        displayMessage(`${guess} is too low!`);
    } else { // Guess is too high
        displayMessage(`${guess} is too high!`);
    }
}

/**
 * Display the user's guess and update remaining attempts.
 * @param {number} guess - The user's guessed number
 */
function displayGuess(guess) {
    userInput.value = ''; // Clear input field
    guessSlot.innerHTML += `${guess}, `; // Show guess in list
    numGuesses++; // Increment guess count
    remaining.innerHTML = `${10 - numGuesses} Guesses Remaining`; // Update remaining attempts
}

/**
 * Display a hint or message to the user.
 * @param {string} message - Message to display
 */
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Show message in hint area
}

/**
 * End the game by disabling input and showing restart option.
 */
function endGame() {
    userInput.value = ''; // Clear input field
    userInput.setAttribute('disabled', ''); // Disable input
    p.classList.add('button'); // Style new game button
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`; // Set button text
    startOver.appendChild(p); // Add button to DOM
    playGame = false; // Set game as inactive
    newGame(); // Set up new game listener
}

/**
 * Set up event listener for starting a new game.
 * Resets all game state and UI elements.
 */
function newGame() {
    const newGameButton = document.querySelector('#newGame'); // Get new game button
    newGameButton.addEventListener('click', function () {
        // Reset game state and UI
        random = parseInt(Math.random() * 100 + 1); // Generate new random number
        prevGuesses = []; // Clear previous guesses
        numGuesses = 1; // Reset guess count
        guessSlot.innerHTML = ''; // Clear guess display
        remaining.innerHTML = '10 Guesses Remaining'; // Reset remaining attempts
        lowOrHi.innerHTML = ''; // Clear hint messages
        userInput.removeAttribute('disabled'); // Enable input
        startOver.removeChild(p); // Remove new game button
        playGame = true; // Set game as active
    });
}

