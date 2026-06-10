class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Map = new Map();
        for (const c of s1) {
            s1Map.set(c, (s1Map.get(c) ?? 0) + 1);
        }

        let matches = 0;
        const matchesNeeded = s1Map.size;

        // setup initial window counts
        const windowMap = new Map();
        for (let i = 0; i < s1.length; i++) {
            const c = s2[i];
            if (s1Map.has(c) && s1Map.get(c) === windowMap.get(c)) {
                matches--;
            }
            windowMap.set(c, (windowMap.get(c) ?? 0) + 1);
            if (s1Map.get(c) === windowMap.get(c)) {
                matches++;
            }
        }
        if (matches === matchesNeeded) return true;

        // sliding window of fixed size
        for (let i = 0; i < s2.length - s1.length; i++) {
            // remove prev start of window
            const leftChar = s2[i];
            if (windowMap.get(leftChar) === s1Map.get(leftChar)) {
                matches--;
            }
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            if (windowMap.get(leftChar) === s1Map.get(leftChar)) {
                matches++;
            }

            // add new end of window
            const rightChar = s2[i + s1.length];
            if (windowMap.has(rightChar) && windowMap.get(rightChar) === s1Map.get(rightChar)) {
                matches--;
            }
            windowMap.set(rightChar, (windowMap.get(rightChar) ?? 0) + 1);
            if (windowMap.get(rightChar) === s1Map.get(rightChar)) {
                matches++;
            }
            if (matches === matchesNeeded) return true;
        }

        return false;
    }
}
