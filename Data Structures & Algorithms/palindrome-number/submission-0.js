class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        const arr = x.toString().split('');
        const rev = [...arr].reverse();
        return JSON.stringify(arr) === JSON.stringify(rev);
    }
}
