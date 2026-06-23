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
        while (cur || cur2) {
            const v1 = cur ? cur.val : 0;
            const v2 = cur2 ? cur2.val : 0;
            const sum = v1 + v2 + carry;
            let val = sum;
            if (sum >= 10) {
                val = sum - 10;
                carry = 1;
            } else {
                carry = 0;
            }
            newCur.next = new ListNode(val);
            newCur = newCur.next;
            if (cur) cur = cur.next;
            if (cur2) cur2 = cur2.next;
        }

        if (carry) {
            newCur.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
