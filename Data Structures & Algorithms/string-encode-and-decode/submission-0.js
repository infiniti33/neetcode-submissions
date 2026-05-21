class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = [];
        for (const s of strs) {
            encoded.push(s.length);
            encoded.push('#');
            encoded.push(s);
        }
        return encoded.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let i = 0;
        while (i < str.length) {
            const numEnd = str.indexOf('#', i);
            const length = parseInt(str.slice(i, numEnd), 10);
            const start = numEnd + 1;
            const end = start + length;
            const s = str.slice(start, end);
            strs.push(s);
            i = end;
        }
        return strs;
    }
}
