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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const minHeap = new MinPriorityQueue((a) => a.val);
        const dummy = new ListNode();

        let current = dummy;
        // add first node from each list into the minHeap
        for (const list of lists) {
            if (list) {
                minHeap.enqueue(list);
            }
        }
        while (minHeap.size() > 0) {
            // pop the min from the minHeap
            const min = minHeap.dequeue();
            // put the min into the result
            current.next = min;
            current = current.next;
            if (min.next) {
            // add the next node from the list that contributed the min
                minHeap.enqueue(min.next);
            }
            // continue this merging until all lists are empty
        }
            return dummy.next;
    }
}
