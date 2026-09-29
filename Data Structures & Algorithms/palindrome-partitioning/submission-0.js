class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const backtrack = (start, strs) => {
            if (start === s.length) {
                result.push([...strs]);
                return;
            }
            for (let end = start; end < s.length; end++) {
                const str = s.slice(start, end + 1);
                if (this.isPalindrome(str)) {
                    strs.push(str);
                    backtrack(end + 1, strs);
                    strs.pop();
                }
            }
        }

        backtrack(0, []);

        return result;
    }

    isPalindrome(s) {
        let isPalin = true;
        let r = s.length - 1;
        for (let l = 0; l < s.length; l++) {
            if (s[l] !== s[r]) return false;
            r--;
        }
        return isPalin;
    }
}
