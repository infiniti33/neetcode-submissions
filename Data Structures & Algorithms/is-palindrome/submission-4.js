class Solution {
    isAlphanumeric(c) {
        return /^[a-zA-Z0-9]+$/i.test(c);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphanumeric(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
