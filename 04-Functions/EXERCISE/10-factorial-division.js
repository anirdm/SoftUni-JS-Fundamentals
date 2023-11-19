function factorialDivision(num1, num2) {
    console.log((factorial(num1) / factorial(num2)).toFixed(2));

    function factorial(num) {
        if(num == 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
}
