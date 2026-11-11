class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pts = points.map((p, i) => [p, i]);
        const heap = new PriorityQueue((a, b) => Math.sqrt((a[0][0] - 0)**2 + (a[0][1] - 0)**2) - Math.sqrt((b[0][0] - 0)**2 + (b[0][1] - 0)**2), pts);

        const result = [];

        for (let i = 0; i < k; i++) {
            result.push(points[heap.pop()[1]]);
        }

        return result;
    }
}
