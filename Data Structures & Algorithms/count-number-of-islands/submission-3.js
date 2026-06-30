class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let islands = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') {
                return;
            }
            grid[r][c] = '2';

            dfs(r, c + 1);
            dfs(r, c - 1);
            dfs(r + 1, c);
            dfs(r - 1, c);
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] === '1') {
                    islands++;
                    dfs(row, col);
                }
            }
        }

        return islands;
    }
}
