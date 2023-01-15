const sum_of_array = (arr) => {
    let sum_of_array = 0;
    for (let i = 0; i < arr.length; i++) {
        sum_of_array += arr[i];
    }
    return sum_of_array;
}

console.log(sum_of_array([1, 2, 3, 4, 5]));
console.log(sum_of_array([-1, 0, -3, 4, 5]));