class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== '1') {
                return;
            }
            grid[r][c] = '0';
            const neighbors = [[r - 1, c], [r + 1, c], [r, c -1], [r, c + 1]];

            for (const [row, col] of neighbors) {
                dfs(row, col);
            }
        }

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === '1') {
                    islands++;
                    dfs(r, c);
                }
            }
        }

        return islands;
    }
}
