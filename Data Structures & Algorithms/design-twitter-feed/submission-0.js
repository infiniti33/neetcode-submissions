class Twitter {
    constructor() {
        this.followers = {};
        this.currentTweetId = 0;
        this.tweets = {};
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweets[userId]) {
            this.tweets[userId] = [];
        }
        this.tweets[userId].push([this.currentTweetId, tweetId]);
        this.currentTweetId++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const following = this.followers[userId] || new Set();
        following.add(userId);
        let newsFeed = [];
        for (const followee of following) {
            const tweets = (this.tweets[followee] ?? []);
            const recentTweets = tweets.slice(-10);
            newsFeed.push(...recentTweets);
            newsFeed.sort((a, b) => b[0] - a[0]);
            newsFeed = newsFeed.slice(0, 10);
        }
        return newsFeed.map((t) => t[1]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followers[followerId]) {
            this.followers[followerId] = new Set();
        }
        this.followers[followerId].add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followers[followerId]) {
            this.followers[followerId].delete(followeeId);
        }
    }
}
