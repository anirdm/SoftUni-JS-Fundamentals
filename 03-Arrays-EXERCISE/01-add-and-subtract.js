function addAndSubtract(arr) {
    let sumOriginal = 0;
    let sumModified = 0;

    for(num of arr) {
        sumOriginal += num;
    }

    for(let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 == 0) {
            arr[index] += index;
        } else {
            arr[index] -= index;
        }
        sumModified += arr[index];
    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumModified);
}
