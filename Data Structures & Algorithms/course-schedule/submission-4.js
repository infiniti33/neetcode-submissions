class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const pre = {};
        for (let i = 0; i < numCourses; i++) {
            pre[i] = [];
        }
        for (const [c, p] of prerequisites) {
            pre[c].push(p);
        }

        const taken = new Set();
        const visiting = new Set();

        const dfs = (course) => {
            if (visiting.has(course)) return false;
            visiting.add(course);

            for (const c of pre[course]) {
                if (taken.has(c)) continue;
                if (!dfs(c)) return false;
            }
            visiting.delete(course);
            taken.add(course);
            return true;
        }
        
        return Object.keys(pre).every((c) => dfs(c));
    }
}
