class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 0;
        let second = 1;
        for (let i = 0; i < n; i++) {
            const third = first + second;
            first = second;
            second = third;
        }
        return second;
    }
}
