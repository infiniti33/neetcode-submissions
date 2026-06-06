class Node {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.val = value;
    }
}

class MyDeque {
    constructor() {
        this.start = null;
        this.end = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.end;
    }

    /**
     * @param {number} value
     */
    append(value) {
        if (this.isEmpty()) {
            this.end = new Node(value);
            this.start = this.end;
        } else {
            this.end.next = new Node(value);
            this.end.next.prev = this.end;
            this.end = this.end.next;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        if (this.isEmpty()) {
            this.start = new Node(value);
            this.end = this.start;
        } else {
            this.start.prev = new Node(value);
            this.start.prev.next = this.start;
            this.start = this.start.prev;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        const end = this.end;
        if (this.end.prev) {
            this.end.prev.next = null;
            this.end = this.end.prev;
        } else {
            this.end = null;
            this.start = null;
        }
        return end.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }
        const start = this.start;
        if (this.start.next) {
            this.start.next.prev = null;
            this.start = this.start.next;
        } else {
            this.start = null;
            this.end = null;
        }
        return start.val;
    }
}
