class CountSquares {
    constructor() {
        this.points = {};
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const key = point.join(',');
        if (!this.points[key]) {
            this.points[key] = 0;
        }
        this.points[key] += 1;
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [px, py] = point;

        let count = 0;
        for (const p of Object.keys(this.points)) {
            const [x, y] = p.split(',').map(Number);
            const dx = Math.abs(px - x);
            const dy = Math.abs(py - y);
            if (dx === 0 || dx !== dy) continue;

            const p2 = `${px},${y}`;
            const p3 = `${x},${py}`;
            const p1Count = this.points[p];
            const p2Count = this.points[p2] || 0;
            const p3Count = this.points[p3] || 0;
            count += p1Count * p2Count * p3Count;
        }

        return count;
    }
}