class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const coursePrereqs = {};
        for (let i = 0; i < numCourses; i++) {
            coursePrereqs[i] = [];
        }
        for (const [course, prereq] of prerequisites) {
            coursePrereqs[course].push(prereq);
        }

        const done = new Set();
        const visiting = new Set();
        
        const dfs = (course) => {
            if (visiting.has(course)) {
                return false;
            }
            visiting.add(course);
            for (const n of coursePrereqs[course]) {
                if (done.has(n)) continue;
                if (!dfs(n, visiting)) {
                    return false;
                }
            }
            visiting.delete(course);
            done.add(course);
            return true;
        }

        return Object.keys(coursePrereqs).every((n) => dfs(n));
    }
}
