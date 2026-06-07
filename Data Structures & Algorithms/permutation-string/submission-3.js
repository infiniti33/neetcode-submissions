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
            if (s1Map[s2[i]] && s1Map[s2[i]] === windowMap[s2[i]]) {
                matches++;
            }
        }
        if (matches === matchesNeeded) {
            return true;
        }
        for (let i = 0; i < s2.length - s1.length; i++) {
            if (s1Map[s2[i]] && windowMap[s2[i]] === s1Map[s2[i]]) {
                matches--;
            }
            windowMap[s2[i]]--;
            windowMap[s2[i + s1.length]] = (windowMap[s2[i + s1.length]] || 0) + 1;
            if (s1Map[s2[i + s1.length]] && s1Map[s2[i + s1.length]] === windowMap[s2[i + s1.length]]) {
                matches++;
            }
            if (matches === matchesNeeded) {
                return true;
            }
        }
            return false;
    }
}
