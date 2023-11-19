function calculator(num1, operation, num2) {
    switch(operation) {
        case '+':
            console.log((num1 + num2).toFixed(2));
            break;
        case '-':
            console.log((num1 - num2).toFixed(2));
            break;
        case '/':
            console.log((num1 / num2).toFixed(2));
            break;
        case '*':
            console.log((num1 * num2).toFixed(2));
            break;
    }
}
