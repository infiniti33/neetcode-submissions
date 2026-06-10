class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let minHours = r;
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);

            let totalHours = 0;
            for (const p of piles) {
                totalHours += Math.ceil(p / mid);
            }
            if (totalHours > h) {
                l = mid + 1;
            } else {
                minHours = mid;
                r = mid - 1;
            }
        }
        return minHours;
    }
}
