class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0;
        const rotten = [];

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                }
                if (grid[r][c] === 2) {
                    rotten.push([r, c]);
                }
            }
        }

        if (fresh === 0) return 0;

        const q = new Queue(rotten);

        let time = 0;
        while (q.size()) {
            time++;
            for (let i = q.size(); i > 0; i--) {
                const [r, c] = q.pop();

                const neighbors = [[r, c - 1], [r, c + 1], [r - 1, c], [r + 1, c]];
                for (const [nr, nc] of neighbors) {
                    if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        fresh--;
                        if (fresh === 0) {
                            return time;
                        }
                        q.push([nr, nc]);
                    }
                }
            }
        }
        return -1;
    }
}
