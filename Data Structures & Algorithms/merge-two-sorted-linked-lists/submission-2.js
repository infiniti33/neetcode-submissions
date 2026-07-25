/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) return null;
        if (!list1) return list2;
        if (!list2) return list1;
        const mergedDummy = new ListNode();
        let p1 = list1;
        let p2 = list2;
        let current = mergedDummy;
        while (p1 && p2) {
            if (p1.val < p2.val) {
                current.next = p1;
                p1 = p1.next;
            } else {
                current.next = p2;
                p2 = p2.next;
            }
            current = current.next;
        }
        if (p1) current.next = p1;
        if (p2) current.next = p2;

        return mergedDummy.next;
    }
}
