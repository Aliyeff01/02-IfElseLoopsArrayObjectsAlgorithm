let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        let uppercaseCount = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j].toUpperCase() && arr[i][j].match(/[A-Z]/)) {
                uppercaseCount++;
            }
        }
        if (uppercaseCount > 2) {
            console.log(arr[i]);
        }
    }
}
