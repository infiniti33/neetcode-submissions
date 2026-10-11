class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const q = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c]);
                }
            }
        }
        
        let distance = 1;
        while (q.length) {
            for (let i = q.length; i > 0; i--) {
                const [r, c] = q.shift();
                const neighbors = [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]];
                for (const [newRow, newCol] of neighbors) {
                    if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && grid[newRow][newCol] === 2147483647) {
                        grid[newRow][newCol] = distance;
                        q.push([newRow, newCol]);
                    }
                }
            }
            distance++;
        }

        return grid;
    }
}
