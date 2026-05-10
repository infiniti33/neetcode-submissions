class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        let right = 1;
        while (right < prices.length) {
            if (prices[right] > prices[left]) {
                maxProfit = Math.max(prices[right] - prices[left], maxProfit);
                right++;
            } else {
                left = right;
                right++;
            }
        }
        return maxProfit;
    }
}
