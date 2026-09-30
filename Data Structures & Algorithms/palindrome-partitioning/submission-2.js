class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = [];
        const dfs = (start, path = []) => {
            if (start === s.length) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < s.length; i++) {
                const candidate = s.slice(start, i + 1);
                if (this.isPalindrome(candidate)) {
                    path.push(candidate);
                    dfs(i + 1, path);
                    path.pop();
                }
            }
        }

        dfs(0);

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
