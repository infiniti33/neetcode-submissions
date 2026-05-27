class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s.length) return '';
        const tCounts = {};
        for (const c of t) {
            tCounts[c] = (tCounts[c] || 0) + 1;
        }

        const requiredMatches = Object.keys(tCounts).length;
        const windowCounts = {};
        let l = 0;
        let matches = 0;
        let result = [];
        let resultLength = Infinity;

        for (let r = 0; r < s.length; r++) {
            const char = s[r];
            windowCounts[char] = (windowCounts[char] || 0) + 1;

            if (tCounts[char] && windowCounts[char] === tCounts[char]) {
                matches++;
            }
            while (matches === requiredMatches) {
                const length = r - l + 1;
                if (length < resultLength) {
                    resultLength = length;
                    result = [l, r];
                }
                const leftChar = s[l];
                windowCounts[leftChar]--;
                if (tCounts[leftChar] && windowCounts[leftChar] < tCounts[leftChar]) {
                    matches--;
                }
                l++;
            }
        }
        return resultLength === Infinity ? '' : s.slice(result[0], result[1] + 1);
    }
}
