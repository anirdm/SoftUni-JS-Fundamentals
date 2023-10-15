function palindrome(arr) {
    for(num of arr) {
        let numToString = num.toString();
        let reversedNumStr = numToString.split('').reverse().join('');
        console.log(numToString == reversedNumStr);
    }
}
