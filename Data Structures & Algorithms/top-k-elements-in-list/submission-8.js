class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = new Map();
        for (const n of nums) {
            m.set(n, (m.get(n) ?? 0) + 1);
        }
        const counts = Array.from({ length: nums.length + 1 }, () => []);
        for (const n of m.keys()) {
            if (!counts[m.get(n)]) {
                counts[m.get(n)] = [];
            }
            counts[m.get(n)].push(n);
        }
        const topK = [];
        for (let i = counts.length - 1; i >= 0; i--) {
            while (topK.length < k && counts[i].length) {
                topK.push(counts[i].pop());
            }
            if (topK.length === k) {
                return topK;
            }
        }
        return topK;
    }
}
