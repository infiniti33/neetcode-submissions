class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;

        let lowestPriceSeen = prices[0];
        for (const p of prices) {
            if (p < lowestPriceSeen) {
                lowestPriceSeen = p;
            }
            const profit = p - lowestPriceSeen;
            max = Math.max(max, profit);
        }

        return max;
    }
}
