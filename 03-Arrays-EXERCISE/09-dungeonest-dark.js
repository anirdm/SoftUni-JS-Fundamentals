function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;  
    arr = arr[0].split('|');
    
    for(let room = 0; room < arr.length; room++) {
        let part = arr[room].split(' ');
        let monsterOrItem = part[0];
        let points = part[1];

        switch(monsterOrItem) {
            case 'potion':
                if(health + Number(points) <= 100) {
                    health += Number(points);
                } else {
                    points = 100 - health;
                    health = 100;     
                }

                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                coins += Number(points);
                console.log(`You found ${points} coins.`);
                break;

            default:
                health -= points;

                if(health > 0) {
                    console.log(`You slayed ${monsterOrItem}.`);
                } else {
                    console.log(`You died! Killed by ${monsterOrItem}.`);
                    console.log(`Best room: ${room + 1}`);
                    return;
                }        
                break;
        }
    }

    console.log('You\'ve made it!');
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);