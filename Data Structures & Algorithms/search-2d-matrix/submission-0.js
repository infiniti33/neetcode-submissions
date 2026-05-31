class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // find row
        let top = 0;
        let bottom = matrix.length -1;
        let row = -1;

        while (top <= bottom) {
            const mid = top + Math.floor((bottom - top) / 2);
            const lowerBound = matrix[mid][0];
            const upperBound = matrix[mid][matrix[mid].length - 1];
            if (lowerBound <= target && target <= upperBound) {
                row = mid;
                break;
            } else if (lowerBound < target) {
                top = mid + 1;
            } else if (upperBound > target) {
                bottom = mid - 1;
            }
        }

        // find value
        if (row === -1) return false;
        let l = 0;
        let r = matrix[row].length;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (matrix[row][mid] < target) {
                l = mid + 1;
            } else if (matrix[row][mid] > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
