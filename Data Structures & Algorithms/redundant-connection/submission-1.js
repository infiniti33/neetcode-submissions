class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const adj = {};
        for (let i = 1; i <= edges.length; i++) {
            adj[i] = [];
        }
        for (const [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        const visited = new Set();
        const cycle = new Set();
        let cycleStart = -1;

        const dfs = (node, parent) => {
            if (visited.has(node)) {
                cycleStart = node;
                return true;
            }
            visited.add(node);
            for (const neighbor of adj[node]) {
                if (neighbor === parent) continue;
                if (dfs(neighbor, node)) {
                    if (cycleStart !== -1) {
                        cycle.add(node);
                    }
                    if (cycleStart === node) {
                        cycleStart = -1;
                    }
                    return true;
                }
            }
            return false;
        }

        dfs(1, null);

        for (let i = edges.length - 1; i >= 0; i--) {
            const [a, b] = edges[i];
            if (cycle.has(a) && cycle.has(b)) {
                return [a, b];
            }
        }

    }
}
