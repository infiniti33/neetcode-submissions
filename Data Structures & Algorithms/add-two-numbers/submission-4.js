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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let newCur = dummy;
        let cur = l1;
        let cur2 = l2;
        let carry = 0;
        while (cur || cur2 || carry) {
            const v1 = cur ? cur.val : 0;
            const v2 = cur2 ? cur2.val : 0;
            const sum = v1 + v2 + carry;
            const val = sum % 10;
            carry = Math.floor(sum / 10);
            newCur.next = new ListNode(val);
            newCur = newCur.next;
            if (cur) cur = cur.next;
            if (cur2) cur2 = cur2.next;
        }

        return dummy.next;
    }
}
