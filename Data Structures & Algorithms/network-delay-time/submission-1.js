class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};
        for (const [a, neighbor, time] of times) {
            if (!adj[a]) {
                adj[a] = [];
            }
            adj[a].push([time, neighbor]);
        }

        const q = new PriorityQueue((a, b) => a[0] - b[0]);
        q.enqueue([0, k]);

        const visited = new Set();
        let t = 0;

        while (q.size()) {
            const [time, node] = q.dequeue();
            if (visited.has(node)) continue;
            visited.add(node);
            t = time;

            for (const [neiTime, nei] of adj[node] ?? []) {
                // if (!visited.has(nei)) {
                    q.enqueue([time + neiTime, nei]);
                // }
            }
        }

        return visited.size === n ? t : -1;
    }
}
