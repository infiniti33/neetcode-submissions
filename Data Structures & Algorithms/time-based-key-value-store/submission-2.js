class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return '';
        }
        const stored = this.keyStore.get(key);
        let result = '';
        let l = 0;
        let r = stored.length - 1;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            if (stored[m][1] <= timestamp) {
                result = stored[m];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return result.length ? result[0] : result;
    }
}
