function commonElements(arr1, arr2) {
    for(el1 of arr1) {
        for(el2 of arr2) {
            if(el1 === el2) {
                console.log(el1);
            }
        }
    }
}
