class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};

        for (let i = 1; i <= n; i++) {
            adj[i] = [];
        }

        for (const [node, neighbor, time] of times) {
            adj[node].push([neighbor, time]);
        }

        const minHeap = new MinPriorityQueue(([time, node]) => time);
        minHeap.enqueue([0, k]);

        const visited = new Set();
        let t = 0;

        while (minHeap.size()) {
            const [time, node] = minHeap.dequeue();
            if (visited.has(node)) continue;
            visited.add(node);
            t = time;

            for (const [neighbor, nTime] of adj[node]) {
                if (!visited.has(neighbor)) {
                    minHeap.enqueue([time + nTime, neighbor]);
                }
            }
        }

        return visited.size === n ? t : -1;
    }
}
