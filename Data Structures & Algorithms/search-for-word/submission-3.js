class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const search = (row, col, index = 0, visited = new Set()) => {
            if (index >= word.length) return true;
            if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index] || visited.has(`${row},${col}`)) return false;
            visited.add(`${row},${col}`);
            const neighbors = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]];
            for (const [r, c] of neighbors) {
                if (search(r, c, index + 1, visited)) return true;
            }
            visited.delete(`${row},${col}`);
            return false;
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (search(row, col)) return true;
            }
        }

        return false;
    }
}
