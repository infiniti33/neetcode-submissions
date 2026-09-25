class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = prices[0];

        for (let i = 0; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            const profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }

        return maxProfit;
    }
}
