/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a
given target value. If target is not found in the array, return [-1, -1].
*/


function firstAndLastIndexOfElem(arr, target) {
    let firstIndex = -1;
    let lastIndex = -1;
    let count = 0;
    for (const [index, num] of arr.entries()) {
       if (num === target){
           if (count === 0) {
                firstIndex = index
                lastIndex = index
           }
           else {
               lastIndex = index
           }
           count += 1;
       }

    }
    return [firstIndex, lastIndex];
}

console.log(firstAndLastIndexOfElem([5, 7, 7, 8, 8, 10], 8))
console.log(firstAndLastIndexOfElem([5, 7, 7, 8, 8, 10], 6))
console.log(firstAndLastIndexOfElem([5, 6, 7, 8, 8, 6], 6))
