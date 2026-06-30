class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const bfs = (r, c) => {
            const q = new Queue([[r, c]]);
            grid[r][c] = '2';

            while (q.size()) {
                for (let i = q.size(); i > 0; i--) {
                    const [row, col] = q.dequeue();

                    const neighbors = [[row, col + 1], [row, col - 1], [row + 1, col], [row - 1, col]];
                    for (const [newR, newC] of neighbors) {
                        if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === '1') {
                            grid[newR][newC] = '2';
                            q.enqueue([newR, newC]);
                        }
                    }
                }
            }
        }
        let islands = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === '1') {
                    islands++;
                    bfs(row, col);
                }
            }
        }
        return islands;
    }
}
