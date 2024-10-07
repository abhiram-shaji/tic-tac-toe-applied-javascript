const canvas = document.getElementById('ticTacToeCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 100;
let currentPlayer = 'red';
const grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let history = [];

// Draw initial grid
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
            if (grid[i][j] !== '') {
                ctx.fillStyle = grid[i][j];
                ctx.fillRect(i * cellSize + 10, j * cellSize + 10, cellSize - 20, cellSize - 20);
            }
        }
    }
}

// Update the grid and render the move
function updateGridAt(x, y) {
    const i = Math.floor(x / cellSize);
    const j = Math.floor(y / cellSize);

    if (grid[i][j] === '') {
        grid[i][j] = currentPlayer;
        history.push({ i, j, player: currentPlayer });
        currentPlayer = currentPlayer === 'red' ? 'blue' : 'red';
        render();

        if (checkWin()) {
            setTimeout(() => alert(`${grid[i][j]} wins!`), 100);
            reset();
        } else if (history.length === 9) {
            setTimeout(() => alert('It\'s a tie!'), 100);
            reset();
        }
    }
}

// Handle mouse click
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    updateGridAt(x, y);
});

// Check for a win
function checkWin() {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], // rows
        [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], // columns
        [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]] // diagonals
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return grid[a[0]][a[1]] && grid[a[0]][a[1]] === grid[b[0]][b[1]] && grid[a[0]][a[1]] === grid[c[0]][c[1]];
    });
}

// Undo the last move
document.getElementById('undoButton').addEventListener('click', () => {
    if (history.length > 0) {
        const lastMove = history.pop();
        grid[lastMove.i][lastMove.j] = '';
        currentPlayer = lastMove.player;
        render();
    }
});

// Reset the game
function reset() {
    grid.forEach(row => row.fill(''));
    history = [];
    currentPlayer = 'red';
    render();
}

// Initial rendering
render();
