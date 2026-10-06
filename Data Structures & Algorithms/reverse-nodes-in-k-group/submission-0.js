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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let prevGroupTail = null;
        let current = head;
        let start = null;
        while (current && this.kRemaining(current, k)) {
            const groupHead = current;
            const { first, next } = this.reverse(current, k);
            if (!start) {
                start = first;
            }
            if (prevGroupTail) {
                prevGroupTail.next = first;
            }
            prevGroupTail = groupHead;
            current = next;
        }
        if (prevGroupTail) {
            prevGroupTail.next = current;
        }

        return start || head;
    }

    reverse(node, k) {
        let prev = null;
        let current = node;
        let count = 0;
        while (current && count < k) {
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
            count++;
        }
        return { first: prev, next: current };
    }

    kRemaining(node, k) {
        let current = node;
        let count = 0;
        while (current) {
            count++;
            if (count === k) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}