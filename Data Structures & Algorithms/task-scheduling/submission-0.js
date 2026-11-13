class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freqs = new Map();

        for (const task of tasks) {
            freqs.set(task, (freqs.get(task) ?? 0) + 1);
        }

        const maxHeap = new PriorityQueue((a, b) => b - a);

        for (const [_, freq] of freqs.entries()) {
            maxHeap.push(freq);
        }

        const cooldowns = new Queue();
        let cycles = 0;
        while (maxHeap.size() || cooldowns.size()) {
            cycles++;
            if (maxHeap.size()) {
                const taskCount = maxHeap.pop();
                if (taskCount > 1) {
                    const readyTime = cycles + n;
                    cooldowns.push([taskCount - 1, readyTime])
                }
            }
            while (cooldowns.size() && cooldowns.front()[1] <= cycles) {
                maxHeap.push(cooldowns.pop()[0]);
            }
        }

        return cycles;
    }
}
