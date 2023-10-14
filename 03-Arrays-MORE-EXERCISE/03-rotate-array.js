function rotateArray(arr) {
    let rotations = arr[arr.length - 1];
    arr.pop();

    for(let i = 0; i < rotations; i++) {
        let movedElement = arr.pop();
        arr.unshift(movedElement);
    }

    console.log(arr.join(' '));
}
