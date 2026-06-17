class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a;
        let b;
        if (nums1.length < nums2.length) {
            a = nums1;
            b = nums2;
        } else {
            a = nums2;
            b = nums1;
        }

        let l = 0;
        let r = a.length;
        const totalLength = nums1.length + nums2.length;
        const half = Math.floor((totalLength + 1) / 2);
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            const i = half - m;

            // Elements to the left of partition (count m)
            const aLeft = (m > 0) ? a[m - 1] : -Infinity;
            const bLeft = (i > 0) ? b[i - 1] : -Infinity;

            // Elements to the right of partition
            const aRight = (m < a.length) ? a[m] : Infinity;
            const bRight = (i < b.length) ? b[i] : Infinity;

            if (aLeft <= bRight && bLeft <= aRight) {
                if (totalLength % 2 !== 0) {
                    // For odd: the median is the largest element of the left half
                    return Math.max(aLeft, bLeft);
                } else {
                    // For even: average of max(lefts) and min(rights)
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
            } else if (aLeft > bRight) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
}
