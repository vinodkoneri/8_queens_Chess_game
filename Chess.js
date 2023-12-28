let chessboard = document.getElementById("chessboard");
    let queens = []; // Array to store queen positions

    // Function to initialize the chessboard
    function initializeChessboard() {
        for (let i = 0; i < 8; i++) {
            let row = chessboard.insertRow(i);
            for (let j = 0; j < 8; j++) {
                let cell = row.insertCell(j);
                cell.className = (i+j) % 2 ===0 ? 'white' : 'black';
                cell.addEventListener("click", () => placeQueen(i, j));
            }
        }
    }

    // Function to place a queen on the chessboard
    function placeQueen(row, col) {
        // Check if the placement is valid
        if (isSafe(row, col)) {
            // Clear existing queens from the board
            clearQueens();
            // Place the queen
            queens.push({ row, col });
            // Redraw the queens on the board
            drawQueens();
            // Check if all queens are placed
            if (queens.length === 8) {
                alert("Congratulations! You placed all queens successfully.");
            }
        } else {
            alert("Invalid queen placement. Please try again.");
        }
    }

    // Function to check if placing a queen at a position is safe
    function isSafe(row, col) {
        for (let queen of queens) {
            if (
                queen.row === row ||
                queen.col === col ||
                Math.abs(queen.row - row) === Math.abs(queen.col - col)
            ) {
                return false;
            }
        }
        return true;
    }

    // Function to clear queens from the board
    function clearQueens() {
        for (let queen of queens) {
            let cell = chessboard.rows[queen.row].cells[queen.col];
            cell.innerHTML = "";
        }
    }

    // Function to draw queens on the board
    function drawQueens() {
        for (let queen of queens) {
            let cell = chessboard.rows[queen.row].cells[queen.col];
            cell.innerHTML = "<div class='queen'>♛</div>";
        }
    }

    // Initialize the chessboard
    initializeChessboard();