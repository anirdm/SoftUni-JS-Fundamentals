function sum(a, b, c) {
    let sum = a + b + c;
    
    if (sum % 1 == 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }   
}

sum(9, 100, 1.1);