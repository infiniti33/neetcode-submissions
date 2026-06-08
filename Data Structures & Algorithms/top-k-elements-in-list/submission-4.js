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

        const counts = Array.from({ length: nums.length }, () => []);

        for (const n of Object.keys(freq)) {
            if (!counts[freq[n]]) {
                counts[freq[n]] = [];
            }
            counts[freq[n]].push(parseInt(n, 10));
        }
        const topK = [];

        for (let i = counts.length - 1; i > 0; i--) {
            if (!counts[i].length) {
                continue;
            }
            
            for (const num of counts[i]) {
                if (topK.length < k) {
                    topK.push(num);
                }
            }
        }

        return topK;
    }
}
