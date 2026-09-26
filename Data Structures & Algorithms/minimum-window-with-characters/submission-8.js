class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const result = [Infinity, Infinity];
        const tFreq = new Map();

        for (const c of t) {
            tFreq.set(c, (tFreq.get(c) ?? 0) + 1);
        }

        const matchesNeeded = tFreq.size;
        let matches = 0;

        const sFreq = new Map();
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const newC = s[r];
            sFreq.set(newC, (sFreq.get(newC) ?? 0) + 1);
            if (tFreq.has(newC) && tFreq.get(newC) === sFreq.get(newC)) {
                matches++;
            }

            while (matches === matchesNeeded) {
                const currentWinLen = r - l + 1;
                if (result[0] === Infinity || currentWinLen < result[1] - result[0] + 1) {
                    result[0] = l;
                    result[1] = r;
                }
                const oldC = s[l];
                if (tFreq.has(oldC) && tFreq.get(oldC) === sFreq.get(oldC)) {
                    matches--;
                }
                sFreq.set(oldC, sFreq.get(oldC) - 1);
                l++;
            }
        }


        return result[0] === Infinity ? '' : s.slice(result[0], result[1] + 1);
    }
}
