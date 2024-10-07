# Tic Tac Toe Game

A simple 2-player Tic Tac Toe game using colors (blue and red) instead of Xs and Os. The game is played on a 3x3 grid, with two players taking turns on the same computer.

## Features

- Two-player game with alternating turns.
- Uses blue and red to represent players.
- Tracks move history with the option to undo.
- Checks for win conditions or a tie.
- Displays messages when a player wins or the game ends in a tie.

## ESLint

This project uses ESLint to ensure code quality. ESLint helps catch potential issues and enforces consistent coding style. The configuration follows modern JavaScript standards, ensuring clean and maintainable code.

## Key Functions

- **`render()`**: Draws the game grid and fills the cells with the correct colors based on player moves.
- **`updateGridAt(x, y)`**: Updates the grid based on player input (color placement) and switches turns between players.
- **`checkWin()`**: Checks the grid to see if there’s a winner after each move.
- **`reset()`**: Resets the game state after a win or tie.
- **`undo()`**: Reverts the last move made by a player using the stored history of moves.

## How to Play

1. Open the game in your browser.
2. Players take turns clicking on empty squares.
   - Player 1 is blue, Player 2 is red.
3. The game checks for a winner after every move.
4. If three cells in a row, column, or diagonal are filled with the same color, that player wins.
5. If the board is full and no one wins, it's a tie.
6. Use the "Undo" button to reverse the last move if needed.


Made by Abhiram Shaji
DGL-213 , North Island College
