class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};

        for (const [n1, n2, t] of times) {
            if (!adj[n1]) adj[n1] = [];
            adj[n1].push([n2, t]);
        }

        const minHeap = new PriorityQueue((a, b) => a[1] - b[1]);
        minHeap.enqueue([k, 0]);

        let t = 0;
        const visited = new Set();

        while (minHeap.size()) {
            const [n1, nt] = minHeap.dequeue();
            if (visited.has(n1)) continue;
            visited.add(n1);
            t = nt;

            for (const [n2, n2t] of adj[n1] ?? []) {
                minHeap.enqueue([n2, nt + n2t]);
            }
        }

        return visited.size === n ? t : -1;
    }
}
