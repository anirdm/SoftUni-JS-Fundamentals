function mergeArrays(arr1, arr2) {
    let newArr = [];

    for(let index = 0; index < arr1.length; index++) {
        if(index % 2 == 0) {
            newArr.push(Number(arr1[index]) + Number(arr2[index]));
        } else {
            newArr.push(arr1[index] + arr2[index]);
        }
    }
    console.log(newArr.join(' - '));
}
