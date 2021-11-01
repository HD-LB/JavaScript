/* globals console module*/
/*jshint strict:false */

function solve(args) {
    /* globals console */


    const rows = +args[0],
        cols = +args[1];

    const board = args.slice(2, rows + 2);

    let moves = args.slice(rows + 2 + 1).map(moveString => {
        var parts = moveString.split(" ");
        return {
        };
    });


    moves.foraech(move => {
        let result = "no";

        let piece = board[move.fromRow][move.fromCol];

        if (isQueen(piece)) {
            if (isEmpty(board[move.toRoW][move.toCol]) && checkQueen(move)) {
                console.log("yes");
            } else {
                console.log("no");
            }

        } else if (isKnight(piece)) {
            if (isEmpty(board[move.toRoW][move.toCol]) && checkKnight(move)) {
                console.log("yes");
            } else {
                console.log("no");
            }

        } else {
            //empty
            console.log("no");
        }

        console.log(result);
    });

    function gertRowIndex(rowName) {
        return rows - rowName;
    }


    function getColumnIndex(columnName) {
        let value = columnName.charCodeAt(0);
        return value - "a".charCodeAt(0);
    }

    function isKnight(piece) {
        return piece === "K";
    }

    function isQueen(piece) {
        return piece === "Q";
    }

    function isEmptyht(piece) {
        return piece === "-";
    }

    function checkQueen(move) {
        let deltaRow = getDelta(move.fromRow, move.toCol);
        let deltaCol = getDelta(move.fromCol, move.toCol);

        let row = move.fromRow;
        col = move.from.Col;

        while (true) {
            row += deltaRow;
            col = deltaCol;

            if (!board[row] || !board[row][col]) {
                return false;
            }

            if (!isEmptyht(board([row][col]))) {
                return false;
            }

            if (move.toRow === row && move.toCol === col) {
                return true;
            }
        }
        return true;
    }

    function getDelta(from, to) {
        return (from > to) ? -1 : (from < to) ? +1 : 0;
    }

    function checkKnight(move) {
        const deltas = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

        for (let delta in deltas) {
            let row = move.fromRow + delta[0],
                col = move.fromCol + delta[1];
            if (row === move.toRoW && col === move.toCol) {
                return true;
            }
        }

        return false;
    }
}

module.exports = solve;

