class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b)
        };

        for (const t of tokens) {
            if (ops[t]) {
                const right = parseInt(stack.pop(), 10);
                const left = parseInt(stack.pop(), 10);
                stack.push(ops[t](left, right));
            } else {
                stack.push(t);
            }
        }

        return stack.pop();
    }
}
