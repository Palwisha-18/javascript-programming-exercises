function reverseArrayUsingReverse(arr) {
    return arr.reverse();
}

function reverseArrayUsingSwapping(arr) {
    const size = arr.length;
    for (let i = 0; i < Math.floor(size / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[size - i - 1];
        arr[size - i - 1] = temp;
    }

    return arr;
}

function reverseArrayUsingRecursion(arr) {
    if (arr.length == 1) {
        return arr;
    }
    return reverseArrayUsingRecursion(arr.slice(1)).concat(arr.slice(0, 1));
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArrayUsingReverse(arr));

arr = [1, 2, 3, 4, 5];
console.log(reverseArrayUsingSwapping(arr));

arr = [1, 2, 3, 4, 5];
console.log(reverseArrayUsingRecursion(arr));