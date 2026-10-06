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
        const root = new ListNode(0, head);
        let prev = root;
        let current = head;

        while (current) {
            const groupTail = current;
            let index = 0;

            while (current && index < k) {
                current = current.next;
                index++;
            }

            if (index < k) {
                prev.next = groupTail;
            } else {
                prev.next = this.reverse(groupTail, k);
                prev = groupTail;
            }
        }


        return root.next;
    }

    reverse(node, k) {
        let prev = null;
        let current = node;
        let round = 0;
        while (current && round < k) {
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
            round++;
        }

        return prev;
    }
}
