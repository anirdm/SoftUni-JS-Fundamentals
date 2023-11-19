function equalSums(arr) {
    let leftSum;
    let rightSum;

    for(let i = 0; i <= arr.length; i++) {
        leftSum = 0;
        rightSum = 0;

        let leftSide = arr.slice(0, i);
        let rightSide = arr.slice(i + 1, arr.length);

        for(lefties of leftSide) {
            leftSum += lefties;
        }

        for(righties of rightSide) {
            rightSum += righties;
        }

        if(leftSum == rightSum) {
            console.log(i);
            return;
        }
    }

    if(leftSum == 0 && rightSum == 0) {
        console.log(0);
    } else {
        console.log('no');
    }
}
