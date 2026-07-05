class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const counts = new Map();

        for (const n of nums) {
            counts.set(n, (counts.get(n) ?? 0) + 1);
        }

        for (const [n, count] of counts.entries()) {
            freq[count].push(n);
        }

        const result = [];
        for (let i = freq.length - 1; i > 0; i--) {
            while (freq[i].length) {
                result.push(freq[i].pop());
                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
