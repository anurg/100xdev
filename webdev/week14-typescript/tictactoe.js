const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TicTacToe {
    constructor() {
        // Initialize empty board as 3x3 array
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
        this.moves = 0;
    }

    // Display the current state of the board
    displayBoard() {
        console.clear();
        console.log('Current Board:\n');
        console.log(' 1 2 3');
        for (let i = 0; i < 3; i++) {
            let row = `${i + 1}`;
            for (let j = 0; j < 3; j++) {
                row += `|${this.board[i][j]}`;
            }
            console.log(row + '|');
            if (i < 2) console.log(' -----');
        }
        console.log('\n');
    }

    // Check if a move is valid
    isValidMove(row, col) {
        return row >= 0 && row < 3 && 
               col >= 0 && col < 3 && 
               this.board[row][col] === ' ';
    }

    // Make a move on the board
    makeMove(row, col) {
        if (this.isValidMove(row, col)) {
            this.board[row][col] = this.currentPlayer;
            this.moves++;
            return true;
        }
        return false;
    }

    // Check for a winner
    checkWinner() {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] !== ' ' &&
                this.board[i][0] === this.board[i][1] &&
                this.board[i][1] === this.board[i][2]) {
                return this.board[i][0];
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (this.board[0][j] !== ' ' &&
                this.board[0][j] === this.board[1][j] &&
                this.board[1][j] === this.board[2][j]) {
                return this.board[0][j];
            }
        }

        // Check diagonals
        if (this.board[0][0] !== ' ' &&
            this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2]) {
            return this.board[0][0];
        }

        if (this.board[0][2] !== ' ' &&
            this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0]) {
            return this.board[0][2];
        }

        return null;
    }

    // Switch the current player
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    // Check if the game is over
    isGameOver() {
        return this.checkWinner() || this.moves === 9;
    }

    // Get user input for the next move
    async getPlayerMove() {
        return new Promise((resolve) => {
            rl.question(`Player ${this.currentPlayer}, enter your move (row col): `, (input) => {
                const [row, col] = input.split(' ').map(num => parseInt(num) - 1);
                resolve({ row, col });
            });
        });
    }

    // Main game loop
    async play() {
        while (!this.isGameOver()) {
            this.displayBoard();
            const { row, col } = await this.getPlayerMove();

            if (this.makeMove(row, col)) {
                const winner = this.checkWinner();
                if (winner) {
                    this.displayBoard();
                    console.log(`Player ${winner} wins!`);
                    break;
                } else if (this.moves === 9) {
                    this.displayBoard();
                    console.log("It's a draw!");
                    break;
                }
                this.switchPlayer();
            } else {
                console.log('Invalid move! Try again.');
            }
        }
        rl.close();
    }
}

// Start the game
console.log('Welcome to Tic Tac Toe!');
console.log('Enter moves using row and column numbers (1-3)');
console.log('Example: "2 3" for second row, third column\n');

const game = new TicTacToe();
game.play();