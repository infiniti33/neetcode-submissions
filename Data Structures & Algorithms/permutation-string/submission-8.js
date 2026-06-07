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

        const s1Map = {};
        const windowMap = {};
        for (let i = 0; i < s1.length; i++) {
            s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
        }

        let matches = 0;
        const matchesNeeded = Object.keys(s1Map).length;
        for (let i = 0; i < s1.length; i++) {
            windowMap[s2[i]] = (windowMap[s2[i]] || 0) + 1;
        }
        for (const char of Object.keys(s1Map)) {
            if (windowMap[char] === s1Map[char]) {
                matches++;
            }
        }

        if (matches === matchesNeeded) {
            return true;
        }
        for (let i = 0; i < s2.length - s1.length; i++) {
            const charToRemove = s2[i];
            if (s1Map[charToRemove] && windowMap[charToRemove] === s1Map[charToRemove]) {
                matches--;
            }
            windowMap[charToRemove]--;
            if (s1Map[charToRemove] && windowMap[charToRemove] === s1Map[charToRemove]) {
                matches++;
            }
            
            const nextChar = s2[i + s1.length];
            if (s1Map[nextChar] && s1Map[nextChar] === windowMap[nextChar]) {
                matches--;
            }
            windowMap[nextChar] = (windowMap[nextChar] || 0) + 1;
            if (s1Map[nextChar] && s1Map[nextChar] === windowMap[nextChar]) {
                matches++;
            }
            if (matches === matchesNeeded) {
                return true;
            }
        }
            return false;
    }
}