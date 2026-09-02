class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [...nums];
        nums.forEach((n) => {
            ans.push(n);
        })

        return ans;
    }
}
