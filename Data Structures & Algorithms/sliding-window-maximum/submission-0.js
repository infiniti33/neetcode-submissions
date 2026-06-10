class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const max = [];

        const deque = new Deque()
        // setup intial window
        for (let i = 0; i < k; i++) {
            while (deque.size() && nums[deque.back()] < nums[i]) {
                deque.popBack()
            }
            deque.pushBack(i);
        }
        max.push(nums[deque.front()]);

        // sliding window
        for (let i = 0; i < nums.length - k; i++) {
            if (deque.front() === i) {
                deque.popFront();
            }
            while (deque.size() && nums[deque.back()] < nums[i + k]) {
                deque.popBack()
            }
            deque.pushBack(i + k);
            max.push(nums[deque.front()]);
        }

        return max;
    }
}
