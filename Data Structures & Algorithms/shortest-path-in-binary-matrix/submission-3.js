class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

        if (grid[0][0] === 1) {
            return -1;
        }
        const start = [0, 0];
        visited[0][0] = 1;

        const q = [start];
        let length = 1;

        while (q.length) {
            const qLength = q.length;
            for (let i = 0; i < qLength; i++) {
                const [r, c] = q.shift();

                if (r === grid.length -1 && c === grid[0].length - 1){ 
                    return length;
                }

                const neighbors = [[r, c - 1], [r, c + 1], [r - 1, c], [r + 1, c], [r - 1, c + 1], [r - 1, c - 1], [r + 1, c + 1], [r + 1, c - 1]];
                for (const [newR, newC] of neighbors) {
                    if (newR < 0 || newC < 0 || newR >= grid.length || newC >= grid[0].length || visited[newR][newC] === 1 || grid[newR][newC] === 1) {
                        continue;
                    }
                    q.push([newR, newC]);
                    visited[newR][newC] = 1;
                }
            }
            length++;
        }

        return -1;   
    }
}
