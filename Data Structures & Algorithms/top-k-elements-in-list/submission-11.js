class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();
        for (const n of nums) {
            counts.set(n, (counts.get(n) ?? 0) + 1);
        }

        const freq = Array.from({ length: nums.length + 1 }, () => []);
        for (const [n, count] of counts) {
            freq[count].push(n);
        }

        const topK = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                topK.push(n);
                if (topK.length === k) {
                    return topK;
                }
            }
        }
    }
}
