// Version 1
function division (num) {
    let text = 'The number is divisible by ';  

    if (num % 10 == 0) {
        console.log(text + '10');       
    } else if (num % 7 == 0) {
        console.log(text + '7');
    } else if (num % 6 == 0) {
        console.log(text + '6');
    } else if (num % 2 == 0) {
        console.log(text + '2');
    } else if (num % 3 == 0) {
        console.log(text + '3');
    } else {
        console.log ('Not divisible');
    }
}

// Version 2
function division (num) {
    let text = 'The number is divisible by ';  
    let isDivisible = false;

    if (num % 10 == 0) {
        console.log(text + '10');    
        isDivisible = true;   
    } 
    
    if (!isDivisible && num % 7 == 0) {
        console.log(text + '7');
        isDivisible = true;
    } 
    
    if (!isDivisible && num % 6 == 0) {
        console.log(text + '6');
        isDivisible = true;
    } 
    
    if (!isDivisible && num % 2 == 0) {
        console.log(text + '2');
        isDivisible = true;
    } 
    
    if (!isDivisible && num % 3 == 0) {
        console.log(text + '3');
        isDivisible = true;
    } 

    if (!isDivisible) {
        console.log('Not divisible');
    }
}