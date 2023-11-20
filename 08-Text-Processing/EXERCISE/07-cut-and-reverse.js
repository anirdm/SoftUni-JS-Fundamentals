function cutAndReverse(str) {
    let middleIdx = str.length / 2;

    let leftHalf = str.substring(0, middleIdx).split('').reverse().join('');
    let rightHalf = str.substring(middleIdx).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');