class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = new Deque();

        // initial window
        for (let i = 0; i < k; i++) {
            while (deque.size() && nums[deque.back()] < nums[i]) {
                deque.popBack();
            }
            deque.pushBack(i);
        }
        result.push(nums[deque.front()]);

        for (let i = 0; i < nums.length - k; i++) {
            if (deque.front() === i) {
                deque.popFront();
            }
            while (deque.size() && nums[deque.back()] < nums[i + k]) {
                deque.popBack();
            }
            deque.pushBack(i + k);
            result.push(nums[deque.front()]);
        }

        return result;
    }
}
