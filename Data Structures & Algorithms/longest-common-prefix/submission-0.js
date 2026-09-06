class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const shortest = strs.reduce((acc, cur) => {
            if (!acc.length || cur.length < acc.length) {
                return cur;
            }
            return acc;
        }, strs[0]);
        const chars = new Array(shortest.length).fill(0);
        for (const s of strs) {
            for (let i = 0; i < shortest.length; i++) {
                if (shortest[i] === s[i]) {
                    chars[i]++;
                }
            }
        }
        let prefix = '';
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === strs.length) {
                prefix += shortest[i];
            } else {
                break;
            }
        }

        return prefix;
    }
}
