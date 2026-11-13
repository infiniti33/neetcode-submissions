class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const pacific = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atlantic = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;

            const neighbors = [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]];
            for (const [nr, nc] of neighbors) {
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < heights.length &&
                    nc < heights[0].length &&
                    !ocean[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean);
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
            dfs(r, COLS - 1, atlantic);
        }
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
            dfs(ROWS - 1, c, atlantic);
        }

        const result = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
