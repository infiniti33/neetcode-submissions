class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MinPriorityQueue();

        for (const n of nums) {
            maxHeap.enqueue(n);
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }

        return maxHeap.front();
    }
}
