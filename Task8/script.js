let arr = [3, 8, 2, 5, 4, 10, 7, 6];


let number = prompt("Enter a number ");


if (number !== null && number !== "") {
    number = Number(number); 
  
    if (arr.includes(number)) {
        console.log(number + " exists in the array");
    } else {
        console.log(number + " does not exist in the array");
    }
} 
