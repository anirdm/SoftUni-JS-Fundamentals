function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];

    while(sortedArr.length > 0) {
        let maxNum = sortedArr.pop();
        let minNum = sortedArr.shift();

        result.push(maxNum);
        result.push(minNum);
    }
    console.log(result.join(' '));  
}