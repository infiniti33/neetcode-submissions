class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        const sMap = new Map();
        for (const c of s1) {
            sMap.set(c, (sMap.get(c) ?? 0) + 1);
        }

        const windowMap = new Map();
        const matchesNeeded = sMap.size;
        let matches = 0;
        for (let i = 0; i < s1.length; i++) {
            const c = s2[i];
            if (sMap.has(c) && windowMap.get(c) === sMap.get(c)) {
                matches--;
            }
            windowMap.set(c, (windowMap.get(c) ?? 0) + 1);
            if (sMap.has(c) && windowMap.get(c) === sMap.get(c)) {
                matches++;
            }
        }
        if (matches === matchesNeeded) {
            return true;
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            const c = s2[r];
            if (sMap.has(c) && windowMap.get(c) === sMap.get(c)) {
                matches--;
            }
            windowMap.set(c, (windowMap.get(c) ?? 0) + 1);
            if (sMap.has(c) && windowMap.get(c) === sMap.get(c)) {
                matches++;
            }
            const oldC = s2[l];
            if (sMap.has(oldC) && windowMap.get(oldC) === sMap.get(oldC)) {
                matches--;
            }
            windowMap.set(oldC, windowMap.get(oldC) - 1);
            if (sMap.has(oldC) && windowMap.get(oldC) === sMap.get(oldC)) {
                matches++;
            }
            if (matches === matchesNeeded) {
                return true;
            }
            l++;
        }

        return false;
    }
}
