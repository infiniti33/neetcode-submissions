class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new PriorityQueue((a, b) => a - b, nums);
        this.k = k;
        while (this.heap.size() > this.k) {
            this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);
        while (this.heap.size() > this.k) {
            this.heap.pop();
        }
        return this.heap.front();
    }
}
