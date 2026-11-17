class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let components = 0;

        const adj = {};
        for (const [node, neighbor] of edges) {
            if (!adj[node]) adj[node] = [];
            if (!adj[neighbor]) adj[neighbor] = [];
            adj[node].push(neighbor);
            adj[neighbor].push(node);
        }

        const visited = new Set();
        const dfs = (node) => {
            visited.add(node);
            for (const neighbor of adj[node] ?? []) {
                if (visited.has(neighbor)) continue;
                dfs(neighbor);
            }
        }

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue;
            components++;
            dfs(i);
        }

        return components;
    }
}
