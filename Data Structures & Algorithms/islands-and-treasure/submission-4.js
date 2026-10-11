class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const chests = [];
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) {
                    chests.push([r, c]);
                }
            }
        }

        const bfs = (row, col) => {
            const q = new Queue();
            q.enqueue([row, col]);
            let distance = 1;
            while (q.size()) {
                const size = q.size();

                for (let i = 0; i < size; i++) {
                    const [r, c] = q.dequeue();

                    const neighbors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]];
                    for (const [newRow, newCol] of neighbors) {
                        if (newRow < 0 || newCol < 0 || newRow >= grid.length || newCol >= grid[0].length || grid[newRow][newCol] === -1) {
                            continue;
                        }
                        if (grid[newRow][newCol] === 2147483647 || grid[newRow][newCol] > distance) {
                            grid[newRow][newCol] = distance;
                            q.enqueue([newRow, newCol]);
                        }
                    }
                }
                distance++;
            }
        }

        for (const [r, c] of chests) {
            bfs(r, c);
        }

        return grid;
    }
}
