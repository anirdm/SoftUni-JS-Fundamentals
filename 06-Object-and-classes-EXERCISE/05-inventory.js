function inventory(arr) {
    let heroes = [];
    
    for (let heroInfo of arr) {
        let [heroName, heroLevel, items] = heroInfo.split(' / ');
        let heroObj = {heroName, heroLevel: Number(heroLevel), items};
        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.heroName}\nlevel => ${hero.heroLevel}\nitems => ${hero.items}`);
    }   
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);