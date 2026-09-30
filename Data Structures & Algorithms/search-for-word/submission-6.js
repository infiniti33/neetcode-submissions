class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set();
        const dfs = (r, c, i) => {
            if (i === word.length) return true;
            if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || visited.has(`${r},${c}`) || board[r][c] !== word[i]) {
                return false;
            }
            visited.add(`${r},${c}`);
            const neighbors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]];
            for (const [row, col] of neighbors) {
                if (dfs(row, col, i + 1)) return true;
            }
            visited.delete(`${r},${c}`);
            return false;
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }

        return false;
    }
}
