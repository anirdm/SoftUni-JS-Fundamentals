function negativeOrPositiveNumber(arr) {
    let result = [];

    // for each element of input array
    // - check if current number is negative
    // -- if yes -> add to beginning
    // -- otherwise -> add to the end

    for(let el of arr) {
        let num = Number(el);

        if(num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    //print result
    for(let num of result) {
        console.log(num);
    }  
}