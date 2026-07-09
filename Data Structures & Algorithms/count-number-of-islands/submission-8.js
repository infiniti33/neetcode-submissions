class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const bfs = (r, c) => {
            const q = [[r, c]];
            
            while (q.length) {
                for (let i = q.length; i > 0; i--) {
                    const [row, col] = q.shift();

                    const neighbors = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]];
                    for (const [newRow, newCol] of neighbors) {
                        if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === '1') {
                            grid[newRow][newCol] = '0';
                            q.push([newRow, newCol]);
                        }
                    }
                }
            }
        }

        let islands = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === '1') {
                    islands++;
                    bfs(r, c);
                }
            }
        }

        return islands;
    }
}
