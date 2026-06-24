class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const numCols = matrix[0].length;
        const numRows = matrix.length;

        let l = 0;
        let r = numRows * numCols - 1;
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            const row = Math.floor(mid / numCols);
            const col = mid % numCols;
            const val = matrix[row][col];
            if (val === target) {
                return true;
            } else if (val < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}
