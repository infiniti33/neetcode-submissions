// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        const nodes = new Map();
        let cur = head;
        while (cur) {
            nodes.set(cur, new Node(cur.val));
            cur = cur.next;
        }
        cur = head;
        while (cur) {
            const newNode = nodes.get(cur);
            if (cur.next) {
                newNode.next = nodes.get(cur.next);
            }
            if (cur.random) {
                newNode.random = nodes.get(cur.random);
            }
            cur = cur.next;
        }
        return nodes.get(head);
    }
}
