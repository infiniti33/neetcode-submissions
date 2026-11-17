class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const visited = new Set();
        const list = {};

        for (const [node, neighbor] of edges) {
            if (!list[node]) list[node] = [];
            if (!list[neighbor]) list[neighbor] = [];
            list[node].push(neighbor);
            list[neighbor].push(node);
        }

        const dfs = (node, parent) => {
            if (visited.has(node)) return false;

            visited.add(node);

            for (const neighbor of list[node] ?? []) {
                if (neighbor === parent) continue;
                if (!dfs(neighbor, node)) return false;
            }

            return true;
        }

        return dfs(0, null) && visited.size === n;
    }
}
