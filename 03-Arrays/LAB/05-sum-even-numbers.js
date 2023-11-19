function sumEvenNumbers(arr) {
    let sum = 0;

    for(num of arr) {
        if(Number(num) % 2 == 0) {
            sum += Number(num);
        }
    }
    console.log(sum);
}
