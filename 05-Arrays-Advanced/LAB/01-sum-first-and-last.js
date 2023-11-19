function sumFirstAndLast(arr) {
    let sum = 0;
    let first = arr.shift();
    let last = arr.pop();

    console.log(Number(first) + Number(last));
}
