class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let maxSize = 1;

        let l = 0;
        let prev = '';
        for (let r = 1; r < arr.length; r++) {
            if (arr[r] > arr[r - 1] && prev !== '>') {
                maxSize = Math.max(maxSize, r - l + 1);
                prev = '>';
            } else if (arr[r] < arr[r - 1] && prev !== '<') {
                maxSize = Math.max(maxSize, r - l + 1);
                prev = '<';
            } else {
                l = arr[r] === arr[r - 1] ? r : r - 1;
                prev = arr[r] > arr[r - 1] ? '>' : (arr[r] < arr[r - 1] ? '<' : '');
                maxSize = Math.max(maxSize, r - l + 1);
            }
        }
        return maxSize;
    }
}