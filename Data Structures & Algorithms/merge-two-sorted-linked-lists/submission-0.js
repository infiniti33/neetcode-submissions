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
        let p1 = list1;
        let p2 = list2;
        let merged = null;
        let curr = null;

        while (p1 || p2) {
            if (!p1) {
                if (!merged) {
                    merged = p2;
                    curr = merged;
                } else {
                    curr.next = p2;
                    curr = curr.next;
                }
                p2 = p2.next;
            } else if (!p2) {
                if (!merged) {
                    merged = p1;
                    curr = merged;
                } else {
                    curr.next = p1;
                    curr = curr.next;
                }
                p1 = p1.next;
            } else if (p1.val > p2.val) {
                if (!merged) {
                    merged = p2;
                    curr = merged;
                } else {
                    curr.next = p2;
                    curr = curr.next;
                }
                p2 = p2.next;
            } else {
                if (!merged) {
                    merged = p1;
                    curr = merged;
                } else {
                    curr.next = p1;
                    curr = curr.next;
                }
                p1 = p1.next;
            }
        }
        return merged;
    }
}
