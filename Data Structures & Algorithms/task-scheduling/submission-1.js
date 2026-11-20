class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = {};

        for (const task of tasks) {
            freq[task] = (freq[task] ?? 0) + 1;
        }

        const maxHeap = new PriorityQueue((a, b) => b[1] - a[1]);

        for (const count of Object.values(freq)) {
            maxHeap.push([0, count]);
        }
        
        const q = new Queue();
        let cycles = 0;
        while (maxHeap.size() || q.size()) {
            cycles++;

            if (maxHeap.size()) {
                const [_, count] = maxHeap.pop();

                if (count > 1) {
                    q.push([cycles + n, count - 1]);
                }
            }

            while (q.front() && q.front()[0] <= cycles) {
                maxHeap.push(q.pop());
            }
        }

        return cycles;
    }
}
