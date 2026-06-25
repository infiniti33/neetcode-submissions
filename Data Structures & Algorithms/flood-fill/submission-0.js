class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const visited = new Set();

        this.dfs(image, sr, sc, color, image[sr][sc], visited);

        return image;
    }

    dfs(m, r, c, color, colorOld, visited) {
        if (r < 0 || r === m.length || c < 0 || c === m[r].length || visited.has(`${r},${c}`)) return;

        visited.add(`${r},${c}`);

        if (m[r][c] === colorOld) {
            m[r][c] = color;

            this.dfs(m, r - 1, c, color, colorOld, visited);
            this.dfs(m, r + 1, c, color, colorOld, visited);
            this.dfs(m, r, c - 1, color, colorOld, visited);
            this.dfs(m, r, c + 1, color, colorOld, visited);
        }
    }
}
