class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return '';

        const tCounts = new Map();
        for (const c of t) {
            tCounts.set(c, (tCounts.get(c) ?? 0) + 1);
        }

        const matchesNeeded = tCounts.size;
        const windowCounts = new Map();
        let shortest = [0, Infinity];

        let matches = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const newC = s[r];
            windowCounts.set(newC, (windowCounts.get(newC) ?? 0) + 1);
            if (windowCounts.get(newC) === tCounts.get(newC)) {
                matches++;
            }
            while (matches === matchesNeeded) {
                const windowSize = r - l + 1;
                const oldShortest = shortest[1] - shortest[0] + 1;
                if (windowSize < oldShortest) {
                    shortest = [l, r];
                }
                const oldC = s[l];
                if (tCounts.get(oldC) && tCounts.get(oldC) === windowCounts.get(oldC)) {
                    matches--;
                }
                windowCounts.set(oldC, windowCounts.get(oldC) - 1);
                l++;
            }
        }

        return shortest[1] === Infinity ? '' : s.slice(shortest[0], shortest[1] + 1);
    }
}
