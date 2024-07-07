let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minEven = Infinity;
let minEvenIndex = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < minEven) {
        minEven = arr[i];
        minEvenIndex = i;
    }
}

let maxOdd = -Infinity;
let maxOddIndex = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > maxOdd) {
        maxOdd = arr[i];
        maxOddIndex = i;
    }
}


if (minEvenIndex !== -1 && maxOddIndex !== -1) {
    let temp = arr[minEvenIndex];
    arr[minEvenIndex] = arr[maxOddIndex];
    arr[maxOddIndex] = temp;

    console.log("Array after swapping min even with max odd:", arr);
}
