function oddEvenSum(num) {
    let numAsString = num.toString();

    // array destructuring
    let [evenSum, oddSum] = calcEvenOddSum(numAsString);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function calcEvenOddSum(str) {
        let evenSum = 0;
        let oddSum = 0;
    
        for(let char of str) {
            let digit = Number(char);
    
            if(digit % 2 == 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        return [evenSum, oddSum];
    }
}
