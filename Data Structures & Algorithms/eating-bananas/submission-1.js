class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const upper = Math.max(...piles);

        let l = 1;
        let r = upper;
        let min = upper;
        while (l <= r) {
            const rate = Math.floor((r + l) / 2);
            let hoursNeeded = 0;
            for (const p of piles) {
                hoursNeeded += Math.ceil(p / rate);
            }
            if (hoursNeeded <= h) {
                min = Math.min(min, rate);
                r = rate - 1;
            } else {
                l = rate + 1;
            }
        }
        return min;
    }
}
