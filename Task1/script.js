let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let oddElement = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) 
      {
        oddElement.push(i);
    }
}

console.log("Odd Elements'index: " + oddElement);
