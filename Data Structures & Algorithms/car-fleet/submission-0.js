class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     * 
     * [2, 4, 5, 7] [4, 1, 2, 1] 10
     * 2, 6, 2.5, 3
     * 
     * 6, 5, 7, 8
     * 10, 6, 9, 9
     * 14, 7, 11, 10
     *  
     */
    carFleet(target, position, speed) {
        // we want to find the fleet each car will belong to
        // store fleets and their speed/position
        const cars = position.map((p, i) => [p, speed[i]]);
        const sortedCars = cars.toSorted((a, b) => b[0] - a[0]);

        const fleets = [];

        for (let i = 0; i < sortedCars.length; i++) {
            const timeToTarget = (target - sortedCars[i][0]) / sortedCars[i][1];
            if (fleets.length) {
                const prevFleetTimeToTarget = fleets[fleets.length - 1];
                if (timeToTarget > prevFleetTimeToTarget) {
                    fleets.push(timeToTarget);
                }
            } else {
                fleets.push(timeToTarget);
            }
        }

        return fleets.length;
    }
}
