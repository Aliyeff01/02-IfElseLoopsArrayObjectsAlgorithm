function combineArrays(arr1, arr2, char) {
    let combinedArray = [...arr1, ...arr2];
  
    let resultString = combinedArray.join(char);
  
    return resultString;
  }
  
  let array1 = [1, 2];
  let array2 = [3, 4];
  let separator = '*';
  
  let combinedString = combineArrays(array1, array2, separator);
  console.log(combinedString); 
  