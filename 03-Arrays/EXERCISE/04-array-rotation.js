function arrayRotation(arr, rotations) {
    for(let i = 1; i <= rotations; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));
}
