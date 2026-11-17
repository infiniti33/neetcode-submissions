class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const pre = {};
        for (let i = 0; i < numCourses; i++) {
            pre[i] = [];
        }
        for (const [c, p] of prerequisites) {
            pre[c].push(p);
        }

        const visited = new Set();
        const done = new Set();
        const result = [];

        const dfs = (c) => {
            if (visited.has(c)) return false;
            if (done.has(c)) return true;

            visited.add(c);
            for (const p of pre[c]) {
                if (!dfs(p)) return false;
            }

            visited.delete(c);
            result.push(c);
            done.add(c);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }
        return result;
    }
}
