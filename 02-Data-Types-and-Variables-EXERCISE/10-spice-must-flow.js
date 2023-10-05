// starting yield - how much spice can be mined on the first day
function spicesProduction(startingYield) {
    let days = 0;
    let totalSpice = 0;

    while(startingYield >= 100) {
        totalSpice += startingYield;

        if(totalSpice >= 26) {
            totalSpice -= 26;
        }
        startingYield -= 10;
        days++;
    }
    totalSpice -= 26;

    console.log(days);
    console.log(totalSpice);
}

spicesProduction(450);