class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const adj = {};
        wordList.push(beginWord);

        for (const word of wordList) {
            for (let i = 0; i < word.length; i++) {
                const variant = word.slice(0, i) + "_" + word.slice(i + 1);
                if (!adj[variant]) adj[variant] = [];
                adj[variant].push(word);
            }
        }

        const q = new Queue();
        q.push(beginWord);
        const visited = new Set();
        visited.add(beginWord);

        let count = 1;
        while (q.size()) {
            for (let i = q.size(); i > 0; i--) {
                const word = q.pop();
                if (word === endWord) return count;
                for (let j = 0; j < word.length; j++) {
                    const variant = word.slice(0, j) + "_" + word.slice(j + 1);
                    for (const nextWord of adj[variant]) {
                        if (!visited.has(nextWord)) {
                            visited.add(nextWord);
                            q.push(nextWord);
                        }
                    }
                }
            }
            count++;
        }
        return 0;
    }
}
