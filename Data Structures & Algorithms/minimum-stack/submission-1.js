class MinStack {
    stack;
    // min;
    minStack;

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // this.min = Math.min(this.min || Infinity, val);
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1] ?? Infinity, val));
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
