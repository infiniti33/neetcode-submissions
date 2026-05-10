class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let min = prices[0]; // price, index
        for (let i = 1; i < prices.length; i++) {
            const sellPrice = prices[i];
            min = Math.min(prices[i - 1], min);
            const profit = sellPrice - min;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
