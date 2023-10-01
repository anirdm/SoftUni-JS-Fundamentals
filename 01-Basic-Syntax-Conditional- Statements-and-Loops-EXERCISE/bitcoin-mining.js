// arr - array with the amount of gold you mined each day
function bitcoinMining(arr) {
    let bitcoin = 11949.16;
    let boughtBitcoins = 0;
    let dayOfFirstBitcoin = 0;
    let totalProfit = 0;
    let day = 1;
    
    for (dayProfit of arr) {
        let cashProfit = dayProfit * 67.51;

        if (day % 3 != 0) {          
            totalProfit += cashProfit;           
        } else {
            totalProfit += cashProfit * 0.7;
        }

        while (totalProfit >= bitcoin) {
            if (boughtBitcoins == 0) {
                dayOfFirstBitcoin = day;
            }
            boughtBitcoins++;
            totalProfit -= bitcoin;
        }
        
        day++;
    }
    
    console.log(`Bought bitcoins: ${boughtBitcoins}`);

    if (dayOfFirstBitcoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${totalProfit.toFixed(2)} lv.`);
}
