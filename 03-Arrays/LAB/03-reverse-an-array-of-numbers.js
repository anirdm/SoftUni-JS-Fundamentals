function reverseArray(n, inputArr) {
    let arr = [];

    for(let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }

    console.log(arr.reverse().join(' '));
}
