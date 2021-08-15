// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    return (drivers.slice(0,2))
}

function returnLastTwoDrivers() {
    return (drivers.slice(2))
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

function createFareMultiplier(multiplier) {
    return function (fare) {
        const taxi = (multiplier*fare)
        return taxi
    }
}

const fareDoubler = (createFareMultiplier(2));

const fareTripler = (createFareMultiplier(3));

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers) 
}

// x * Y = z
// multiplier * fare = taxi 