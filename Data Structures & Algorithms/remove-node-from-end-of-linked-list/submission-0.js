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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let current = head;
        while (current) {
            length++;
            current = current.next;
        }
        const nodeNumToRemove = length + 1 - n;
        let prev = null;
        current = head;
        for (let i = 1; i < nodeNumToRemove; i++) {
            prev = current;
            current = current.next;
        }
        if (current === head) {
            head = head.next;
        } else if (prev) {
            prev.next = current.next;
        }
        return head;
    }
}
