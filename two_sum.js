/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*/

const two_sum = (arr, target) => {
  let seenIndices = new Map()
  let results = []
  for (const[index, value] of arr.entries()){
    if (seenIndices.has(target - value)) {
      let otherIndex = seenIndices.get(target - value)
      results.push([otherIndex, index])
    }
    else {
      seenIndices.set(value, index);
    }
  }
  return results
}

console.log(two_sum([2, 4, 5, 8, 3], 12))
console.log(two_sum([1, 2, 3, 4, 5], 8))
console.log(two_sum([1, 4, 2, 6, 3], 8))
console.log(two_sum([0, 1, 2, 3, 4, 5], 3))
