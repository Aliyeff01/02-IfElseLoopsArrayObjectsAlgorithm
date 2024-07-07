let arr = [3, 8, 2, 5, 4, 10, 7, 6];


let min = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
        min = i;
    }
}


let max = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
        max = i;
    }
}


let temp = arr[min];
arr[min] = arr[max];
arr[max] = temp;

console.log(arr);
