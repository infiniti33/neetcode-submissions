class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let node = this.head;
        while (node && i < index) {
            node = node.next;
            i++;
        }
        if (node) {
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        if (this.head) {
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
                if (!this.head) {
                    this.tail = null;
                }
                return true;
            } else {
                return false;
            }
        }
        let i = 0;
        let curr = this.head;
        let prev = this.head;
        while (curr && i < index) {
            i++;
            prev = curr;
            curr = curr.next;
        }
        if (curr) {
            prev.next = curr.next;
            if (curr === this.tail) {
                this.tail = prev;
            }
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let node = this.head;
        while (node) {
            values.push(node.value);
            node = node.next;
        }
        return values;
    }
}
