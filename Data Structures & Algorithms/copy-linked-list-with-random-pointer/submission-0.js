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

        const q = new Queue();
        const nodes = new Map();

        q.enqueue(head);
        while (q.size()) {
            const original = q.dequeue();
            if (!nodes.has(original)) {
                nodes.set(original, new Node(original.val));
            }
            if (original.next && !nodes.has(original.next)) {
                nodes.set(original.next, new Node(original.next.val));
                q.enqueue(original.next);
            }
            if (original.random && !nodes.has(original.random)) {
                nodes.set(original.random, new Node(original.random.val));
                q.enqueue(original.random);
            }
            const newNode = nodes.get(original);
            newNode.next = nodes.get(original.next) || null;
            newNode.random = nodes.get(original.random) || null;
        }

        return nodes.get(head);
    }
}
