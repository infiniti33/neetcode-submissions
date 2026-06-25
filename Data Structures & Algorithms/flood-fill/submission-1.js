class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        this.dfs(image, sr, sc, color, image[sr][sc]);

        return image;
    }

    dfs(m, r, c, color, colorOld) {
        if (r < 0 || r === m.length || c < 0 || c === m[r].length || m[r][c] !== colorOld || m[r][c] === color) return;

        m[r][c] = color;

        this.dfs(m, r - 1, c, color, colorOld);
        this.dfs(m, r + 1, c, color, colorOld);
        this.dfs(m, r, c - 1, color, colorOld);
        this.dfs(m, r, c + 1, color, colorOld);
    }
}
