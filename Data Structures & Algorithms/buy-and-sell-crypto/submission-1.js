class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let min = Infinity;
        for (let i = 0; i < prices.length; i++) {
            const sellPrice = prices[i];
            min = Math.min(prices[i], min);
            const profit = sellPrice - min;
            maxProfit = Math.max(profit, maxProfit);
        }
        return maxProfit;
    }
}
