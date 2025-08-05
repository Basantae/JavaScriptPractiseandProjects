// Get the input box where password will be displayed
const passwordBox = document.getElementById("password");

// Desired password length
const length = 12;

// Character sets to pick from
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

// Combine all character sets
const allChars = upperCase + lowerCase + number + specialSymbols;

/**
 * Creates a random password
 * 1. Ensure password has at least one character from each set
 * 2. Fill remaining length with random characters from all sets
 * 3. Shuffle the password to avoid predictable order
 * 4. Display password in the input box
 */
function createPassword() {
  let password = "";

  // Add at least one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

  // Fill the rest of the password length with random characters
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle password characters to avoid predictable pattern
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Show the generated password
  passwordBox.value = password;
}

/**
 * Copies the password text to clipboard
 */
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}


function animateAndCreatePassword() {
  const loadingLine = document.getElementById("loading-line");

  loadingLine.style.width = "0"; // Reset animation

  setTimeout(() => {
    loadingLine.style.width = "100%"; // Start animation
  }, 10);

  setTimeout(() => {
    createPassword(); // Generate password after animation
    loadingLine.style.width = "0"; // Reset for next use
  }, 510);
}
