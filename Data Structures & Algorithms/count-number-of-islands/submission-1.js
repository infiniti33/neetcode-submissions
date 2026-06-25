class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // iterate through grid
        // when encountering a '1' (island), perform DFS
        // and mark all adjacent '1's as visited
        // since they are part of the same island
        // increment a global island counter
        // return the island count after parsing the whole grid
        let numIslands = 0;
        const visited = new Set();

        const dfs = (r, c) => {
            if (r < 0 || r >= grid.length || c >= grid[r].length || c < 0 || visited.has(`${r},${c}`) || grid[r][c] !== '1') {
                return;
            }
            visited.add(`${r},${c}`);

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (visited.has(`${row},${col}`)) continue;

                const value = grid[row][col];

                if (value === '1') {
                    // perform dfs and mark all adjacent '1's as visited
                    numIslands++;
                    dfs(row, col);
                }
            }
        }
        return numIslands;
    }
}
