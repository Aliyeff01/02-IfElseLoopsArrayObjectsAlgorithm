let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let min = Math.min(...arr);
let max = Math.max(...arr);

let totalSum = 0;

for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
}

let sum = totalSum - min - max;

console.log("Sum of all elements excluding min and max:", sum);

