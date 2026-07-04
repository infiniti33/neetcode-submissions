class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;

        const s1Map = new Map();
        for (const c of s1) {
            s1Map.set(c, (s1Map.get(c) ?? 0) + 1);
        }

        const matchesNeeded = s1Map.size;
        let matches = 0;

        const windowMap = new Map();
        for (let i = 0; i < s1.length; i++) {
            const c = s2[i];
            windowMap.set(c, (windowMap.get(c) ?? 0) + 1);
        }

        for (const [char, count] of s1Map) {
            if (windowMap.get(char) === count) {
                matches++;
            }
        }

        if (matches === matchesNeeded) return true;

        for (let l = 0; l < s2.length - s1.length; l++) {
            let oldChar = s2[l];
            if (s1Map.has(oldChar) && s1Map.get(oldChar) === windowMap.get(oldChar)) {
                matches--;
            }
            windowMap.set(oldChar, windowMap.get(oldChar) - 1);
            if (s1Map.has(oldChar) && s1Map.get(oldChar) === windowMap.get(oldChar)) {
                matches++;
            }

            const newChar = s2[l + s1.length];
            if (s1Map.has(newChar) && s1Map.get(newChar) === windowMap.get(newChar)) {
                matches--;
            }
            windowMap.set(newChar, (windowMap.get(newChar) ?? 0) + 1);
            if (s1Map.has(newChar) && s1Map.get(newChar) === windowMap.get(newChar)) {
                matches++;
            }
            if (matches === matchesNeeded) return true;
        }

        return false;
    }
}
