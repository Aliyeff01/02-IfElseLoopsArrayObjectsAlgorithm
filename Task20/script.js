function sumOfIndexes(str, char) {
    let sum = 0;
    let found = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            sum += i;
            found = true;
        }
    }

    if (found) {
        console.log(sum);
    } else {
        console.log(-1);
    }
}

sumOfIndexes("salam", 'a');






  