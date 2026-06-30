class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        let fresh = 0;
        const rotten = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    fresh++;
                } else if (grid[i][j] === 2) {
                    rotten.push([i, j]);
                }
            }
        }
        if (fresh === 0) {
            return 0;
        }

        const q = new Queue(rotten);
        let minutes = 1;

        while (q.size()) {
            for (let i = q.size(); i > 0; i--) {
                const [r, c] = q.dequeue();
                const neighbors = [[r, c + 1], [r, c - 1], [r - 1, c], [r + 1, c]];

                for (const [newR, newC] of neighbors) {
                    if (newR < 0 || newC < 0 || newR >= rows || newC >= grid[newR].length || grid[newR][newC] !== 1) {
                        continue;
                    }
                    fresh--;
                    q.push([newR, newC]);
                    grid[newR][newC] = 2;
                }
            }
            if (fresh === 0) {
                return minutes;
            }
            minutes++;
        }

        return -1;
    }
}
