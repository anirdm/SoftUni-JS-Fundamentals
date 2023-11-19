function sumOfOddEven(number) {
    let sum = 0;
    let startingNum = 1;
    while (number > 0) {
        console.log(startingNum);
        sum += startingNum;
        startingNum += 2;  
        number--;
    }
    console.log(`Sum: ${sum}`)
}