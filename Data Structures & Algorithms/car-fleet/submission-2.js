class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // arrange each car into position and speed object
        // sort cars descending by position
        // add first car to fleet stack
        // iterate through remaining cars
        // for each iteration:
        // pop last fleet off the stack
        // if the current car would join the fleet before reaching target, only push the current car
        // otherwise, push both back onto stack
        // return stack.length
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            cars[i] = [position[i], speed[i]];
        }
        cars.sort((a, b) => b[0] - a[0]);
        const fleets = [cars[0]];
        for (let i = 1; i < cars.length; i++) {
            const fleet = fleets.pop();
            const car = cars[i];
            const fleetMoves = (target - fleet[0]) / fleet[1];
            const carMoves = (target - car[0]) / car[1];
            if (carMoves <= fleetMoves) {
                fleets.push(fleet);
            } else {
                fleets.push(fleet);
                fleets.push(car);
            }
        }
        return fleets.length;
    }
}
