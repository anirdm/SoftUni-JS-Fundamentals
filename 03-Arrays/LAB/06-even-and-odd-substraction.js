function evenOddSubstraction(arr){
    let sumEven = 0;
    let sumOdd = 0;

    for(num of arr) {
        if(Number(num) % 2 == 0) {
            sumEven += Number(num);
        } else {
            sumOdd += Number(num);
        }
    }

    let sub = sumEven - sumOdd;
    console.log(sub);
}
