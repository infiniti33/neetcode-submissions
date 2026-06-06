class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const queue = new Queue();
        for (const s of students) {
            queue.push(s);
        }

        let remaining = students.length;
        for (const sandwich of sandwiches) {
            let count = 0;
            while (count < remaining && queue.front() !== sandwich) {
                queue.push(queue.pop());
                count++;
            }
            if (queue.front() === sandwich) {
                queue.pop();
                remaining--;
            } else {
                break;
            }
        }
        return remaining;
    }
}
