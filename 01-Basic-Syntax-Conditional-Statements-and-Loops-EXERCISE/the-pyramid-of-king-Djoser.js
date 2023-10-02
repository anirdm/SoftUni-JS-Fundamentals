function kingDjoserPyramid(baseSize, stepHeight) {
    let height = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let floor = 1;

    for (currentSize = baseSize; currentSize > 0; currentSize -= 2) {
        height += stepHeight;

        let stepArea = currentSize ** 2;

        if (currentSize <= 2) {
            gold = stepArea * stepHeight;
        } else {
            let stoneArea = ((currentSize - 2) ** 2);
            stone += stoneArea * stepHeight;

            if (floor % 5 == 0) {
                let lapisArea = stepArea - stoneArea;
                lapis += lapisArea * stepHeight;
            } else {
                let marbleArea = stepArea - stoneArea;
                marble += marbleArea * stepHeight;
            }          
        }

        floor++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

