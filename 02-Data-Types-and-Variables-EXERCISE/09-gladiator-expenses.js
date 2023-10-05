function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    let brokenShield = 0;

    for(let i = 1; i <= lostFights; i++) {
        if(i % 2 == 0) {
            total += helmetPrice;
        }
        if(i % 3 == 0) {
            total += swordPrice;
        }
        if(i % 6 == 0) {
            total += shieldPrice;
            brokenShield++;
        } 
        if(brokenShield % 2 == 0 && brokenShield > 0) {
            total += armorPrice;
            brokenShield = 0;
        }
    }

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
