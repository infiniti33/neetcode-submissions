class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return '';
        }

        const tCounts = new Map();

        for (const c of t) {
            if (!tCounts.has(c)) {
                tCounts.set(c, 0);
            }
            tCounts.set(c, tCounts.get(c) + 1);
        }

        const windowCounts = new Map();
        const matchesNeeded = tCounts.size;
        let matches = 0;
        let shortest = [0, Infinity];
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const newC = s[r];
            if (!windowCounts.has(newC)) {
                windowCounts.set(newC, 0);
            }
            windowCounts.set(newC, windowCounts.get(newC) + 1);
            if (tCounts.has(newC) && windowCounts.get(newC) === tCounts.get(newC)) {
                matches++;
            }
            while (matches === matchesNeeded) {
                if ((r - l + 1) < shortest[1] - shortest[0]) {
                    shortest[0] = l;
                    shortest[1] = r + 1;
                }
                const oldC = s[l];
                if (tCounts.get(oldC) === windowCounts.get(oldC)) {
                    matches--;
                }
                windowCounts.set(oldC, windowCounts.get(oldC) - 1);
                l++;
            }
        }

        return shortest[1] === Infinity ? '' : s.slice(shortest[0], shortest[1]);
    }
}
