class MyDeque {
    constructor() {
        this.values = {};
        this.start = 0;
        this.end = -1;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.end < this.start;
    }

    /**
     * @param {number} value
     */
    append(value) {
        this.end++;
        this.values[this.end] = value;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        this.start--;
        this.values[this.start] = value;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        const val = this.values[this.end];
        delete this.values[this.end];
        this.end--;
        return val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }
        const val = this.values[this.start];
        delete this.values[this.start];
        this.start++;
        return val;
    }
}