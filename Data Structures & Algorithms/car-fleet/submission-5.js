class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);

        const fleets = [];
        for (const car of cars) {
            if (!fleets.length) {
                fleets.push(car);
                continue;
            }
            const prevFleet = fleets[fleets.length - 1];
            const prevFleetTime = (target - prevFleet[0]) / prevFleet[1];
            const carTime = (target - car[0]) / car[1];
            if (carTime > prevFleetTime) {
                fleets.push(car);
            }
        }
        return fleets.length;
    }
}
