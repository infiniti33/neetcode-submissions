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
            if (!counts.has(n)) {
                counts.set(n, 0);
            }
            counts.set(n, counts.get(n) + 1);
        }

        for (const n of counts.keys()) {
            freq[counts.get(n)].push(n);
        }

        const topK = [];

        for (let i = freq.length - 1; i > 0; i--) {
            while (freq[i].length && topK.length < k) {
                topK.push(freq[i].pop());
            }
            if (topK.length === k) {
                return topK;
            }
        }
    }
}
