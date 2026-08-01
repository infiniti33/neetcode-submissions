class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 0;

        let maxP = 0;

        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                maxP = Math.max(maxP, prices[r] - prices[l]);
            }
            if (prices[r] < prices[l]) {
                l = r;
            }
            r++;
        }

        return maxP;
    }
}
