function addStringAtIndex(array, index, str) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i === index) {
        result.push(str);
      }
      result.push(array[i]);
    }
  
    if (index >= array.length) {
      result.push(str);
    }
  
    return result;
  }
  
  let arr = ['a', 'hello', 'b', 'world'];
  let index = 3;
  let str = 'dev';
  
  let modifiedArray = addStringAtIndex(arr, index, str);
  console.log(modifiedArray); 
  