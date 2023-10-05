function specialNumbers(number) {
    for(let i = 1; i <= number; i++) {
        sum = 0;
        for(let j = i; j != 0; j = Math.floor(j / 10)) {
            let digit = j % 10;
            sum += digit;
        }

        if(sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }      
    }   
}


