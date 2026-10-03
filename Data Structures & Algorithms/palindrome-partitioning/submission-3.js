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
            for (let i = start; i < s.length; i++) {
                const str = s.slice(start, i + 1);
                if (this.isPalindrome(str)) {
                    strs.push(str);
                    backtrack(i + 1, strs);
                    strs.pop();
                }
            }
        }
        backtrack(0, []);
        return result;
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
