class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        for (const n of nums) {
            counts[n] = (counts[n] || 0) + 1;
        }
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        for (const n of Object.keys(counts)) {
            freq[counts[n]].push(parseInt(n));
        }
        const result = [];
        for (let i = freq.length - 1; i > 0; i--) {
            while (freq[i].length) {
                const num = freq[i].pop();
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}
