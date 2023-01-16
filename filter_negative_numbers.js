let filteredArray = function(arr) {
    return arr.filter(number => number >= 0);
}

console.log(filteredArray([1, -2, 3, -4, -5]))
console.log(filteredArray([-1, -2, -3, -4, -5]))
console.log(filteredArray([-1.1, 2.2, -3.3, 4.4, -5.5]))