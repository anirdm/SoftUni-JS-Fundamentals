function multiplicationTable (num) {
    let product = num;

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${product}`);
        product += num;
    }
}