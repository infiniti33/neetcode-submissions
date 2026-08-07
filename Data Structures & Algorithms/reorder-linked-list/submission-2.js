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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head) return null;

        const reversed = this.reverse(this.getP2(head))

        let p1 = head;
        let p2 = reversed;
        while (p2) {
            const temp1 = p1.next;
            const temp2 = p2.next;
            p1.next = p2;
            p2.next = temp1;
            p1 = temp1;
            p2 = temp2;
        }

        return p1;
    }

    getP2(head) {
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const p2 = slow.next;
        slow.next = null;
        return p2;
    }

    reverse(node) {
        let prev = null;
        let cur = node;
        while (cur) {
            const temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }

        return prev;
    }
}
