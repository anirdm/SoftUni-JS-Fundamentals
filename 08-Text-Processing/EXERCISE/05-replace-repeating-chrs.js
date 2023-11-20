function replaceRepeatingChars(str) {
    let resultStr = '';
    let prevChar = '';

    for (let currChar of str) {
        if (currChar !== prevChar) {
            resultStr += currChar;
            prevChar = currChar;
        }
    }

    console.log(resultStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');