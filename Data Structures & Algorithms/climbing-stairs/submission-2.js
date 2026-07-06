class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;

        const dp = [1, 2];

        let i = 3;
        while (i <= n) {
            const temp = dp[1];
            dp[1] = dp[0] + dp[1];
            dp[0] = temp;
            i++;
        }
        return dp[1];
    }
}
