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

        const s1Map = {}
        const windowMap = {};

        for (let i = 0; i < s1.length; i++) {
            s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
            windowMap[s2[i]] = (windowMap[s2[i]] || 0) + 1;
        }

        let matches = 0;
        const matchesNeeded = Object.keys(s1Map).length;
        for (const c of Object.keys(s1Map)) {
            if (s1Map[c] === windowMap[c]) {
                matches++;
            }
        }
        
        if (matches === matchesNeeded) {
            return true;
        }

        let l = 0;
        let r = s1.length;
        while (r < s2.length) {
            const charR = s2[r];
            if (s1Map[charR] !== undefined && windowMap[charR] === s1Map[charR]) {
                matches--;
            }
            windowMap[charR] = (windowMap[charR] || 0) + 1;
            if (s1Map[charR] !== undefined && windowMap[charR] === s1Map[charR]) {
                matches++;
            }

            const charL = s2[l];
            if (s1Map[charL] !== undefined && windowMap[charL] === s1Map[charL]) {
                matches--;
            }
            windowMap[charL]--;
            if (s1Map[charL] !== undefined && windowMap[charL] === s1Map[charL]) {
                matches++;
            }

            if (matches === matchesNeeded) {
                return true;
            }
            r++;
            l++;
        }

        return false;
    }
}