class Solution {
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
            while (l < r && !this.isAlphanumeric(s[r])) {
                r--;
            }
            if (this.isAlphanumeric(s[l]) && this.isAlphanumeric(s[r])) {
                if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                    return false;
                }
            }
            l++;
            r--;
        }
        return true;
    }

    isAlphanumeric(c) {
        return new RegExp(/^[a-zA-Z0-9]$/).test(c);
    }
}
