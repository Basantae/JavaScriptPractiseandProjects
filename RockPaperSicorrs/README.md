# Rock Paper Scissors Game

A simple and fun Rock-Paper-Scissors game built with JavaScript that lets you challenge the computer and test your luck!

## How It Works (Logic Flow)

- User clicks one of the choices: **rock**, **paper**, or **scissors**.  
- The click listener captures the user's choice and calls the `playGame` function.  
- `playGame` generates a random computer choice using `genCompChoice`.  
- Both choices are compared:  
  - If the same, it's a draw (`drawGame` function).  
  - Otherwise, classic rules apply:  
    - Rock beats scissors  
    - Paper beats rock  
    - Scissors beat paper  
- The winner is decided and `showWinner` updates the scores and displays the result.  
- Scores increment as appropriate and messages update dynamically.  
- The game continues with each user click for endless fun!

## Features

- Interactive gameplay with real-time updates  
- Simple and clear game logic  
- Score tracking between player and computer  

## How to Run

1. Clone or download this repository.  
2. Open `index.html` in your browser (or run the project in your preferred environment).  
3. Click rock, paper, or scissors and enjoy!

---

Feel free to fork, modify, or suggest improvements!

---

*Made with ❤️ by Basantae*

