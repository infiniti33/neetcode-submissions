class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const prereqs = {};
        for (let i = 0; i < numCourses; i++) {
            prereqs[i] = [];
        }
        for (const [course, prereq] of prerequisites) {
            prereqs[course].push(prereq);
        }

        const visited = new Set();
        const done = new Set();
        const result = [];

        const dfs = (course) => {
            if (visited.has(course)) {
                return false;
            }
            if (done.has(course)) {
                return true;
            }
            visited.add(course);
            for (const prereq of prereqs[course]) {
                if (done.has(prereq)) continue;
                if (!dfs(prereq)) {
                    return false;
                }
            }
            visited.delete(course);
            done.add(course);
            result.push(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return [];
            }
        }

        return result;
    }
}
