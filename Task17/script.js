function clear(arr) {
    return arr.filter(Boolean);
}

console.log(clear([0, 1, false, 2, undefined, '', 3, null])); 
