class MedianFinder {
    constructor() {
        this.smallHeap = new MaxPriorityQueue();
        this.largeHeap = new MinPriorityQueue();
    }
// 50, 49, 51, 52
// [49] [50, 51]
    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.smallHeap.push(num);
        const largeMin = this.largeHeap.front();
        const smallMax = this.smallHeap.front();
        if (largeMin !== null & smallMax !== null && largeMin < smallMax) {
            this.largeHeap.push(this.smallHeap.pop());
        }
        if (this.smallHeap.size() > this.largeHeap.size() + 1) {
            this.largeHeap.push(this.smallHeap.pop());
        }
        if (this.largeHeap.size() > this.smallHeap.size() + 1) {
            this.smallHeap.push(this.largeHeap.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.smallHeap.size() === this.largeHeap.size()) {
            return ((this.smallHeap.front() + this.largeHeap.front()) / 2);
        }
        if (this.smallHeap.size() > this.largeHeap.size()) {
            return this.smallHeap.front();
        }
        return this.largeHeap.front();
    }
}
