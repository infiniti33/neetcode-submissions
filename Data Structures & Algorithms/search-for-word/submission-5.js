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
            const key = `${r},${c}`;
            if (r < 0 || r > board.length - 1 || c < 0 || c > board[0].length - 1 || visited.has(key) || board[r][c] !== word[i]) {
                return false;
            }
            visited.add(key);

            const exists = dfs(r + 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c - 1, i + 1);

            visited.delete(key);

            return exists;
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }

        return false;
    }
}
