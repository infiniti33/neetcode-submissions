class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return '';
        }

        const tMap = {};
        for (const c of t) {
            tMap[c] = (tMap[c] || 0) + 1
        }

        const matchesNeeded = Object.keys(tMap).length;
        let matches = 0;

        let result = [0, Infinity];

        const windowMap = {};
        for (let i = 0; i < t.length; i++) {
            const c = s[i];
            windowMap[c] = (windowMap[c] || 0) + 1;
            if (tMap[c] && tMap[c] === windowMap[c]) {
                matches++;
            }
        }
        if (matches === matchesNeeded) {
            result = [0, t.length - 1];
        }

        let l = 0;
        for (let r = t.length; r < s.length; r++) {
            const newC = s[r];
            windowMap[newC] = (windowMap[newC] || 0) + 1;
            if (tMap[newC] && tMap[newC] === windowMap[newC]) {
                matches++;
            }

            while (matches === matchesNeeded) {
                const newSubstringLength = r - l + 1;
                const oldSubstringLength = result[1] - result[0] + 1;
                if (newSubstringLength <= oldSubstringLength) {
                    result = [l, r];
                }
                const oldC = s[l];
                if (tMap[oldC] && tMap[oldC] === windowMap[oldC]) {
                    matches--;
                }
                windowMap[oldC]--;
                l++;
            }
        }

        return result[1] === Infinity ? '' : s.slice(result[0], result[1] + 1);
    }
}
