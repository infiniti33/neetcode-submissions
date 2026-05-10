class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const output = [];
        const freq = {};
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const n of nums) {
            freq[n] = (freq[n] || 0) + 1;
        }
        for (const [n, count] of Object.entries(freq)) {
            buckets[count].push(Number(n));
        }
        for (let i = buckets.length - 1; i > 0; i--) {
            for (const n of buckets[i]) {
                output.push(n);
                if (output.length === k) {
                    return output;
                }
            }
        }
    }
}
