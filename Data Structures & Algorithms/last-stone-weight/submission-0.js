class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new PriorityQueue((a, b) => b - a, stones);

        while (heap.size() > 1) {
            const x = heap.pop();
            const y = heap.pop();
            if (x === y) continue;
            if (x > y) {
                heap.enqueue(x - y);
            } else {
                heap.enqueue(y - x);
            }
        }

        return heap.size() ? heap.front() : 0;
    }
}
