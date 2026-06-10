class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (const n of nums) {
            freq[n] = (freq[n] || 0) + 1;
        }

        const counts = Array.from({ length: nums.length + 1 }, () => []);
        for (const n of Object.keys(freq)) {
            counts[freq[n]].push(parseInt(n, 10));
        }

        const topK = [];

        for (let i = counts.length - 1; i >= 0; i--) {
            while (counts[i].length && topK.length < k) {
                topK.push(counts[i].pop());
            }
            if (topK.length === k) {
                return topK;
            }
        }
        return [];
    }
}
