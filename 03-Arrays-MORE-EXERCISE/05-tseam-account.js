function tseamAccount(arr) {
    let games = arr[0].split(' ');

    for(let i = 1; i < arr.length - 1; i++) {
        let command = arr[i].split(' ');
        let action = command[0];
        let game = command[1];
        let gameInstalled = games.includes(game);

        switch(action) {
            case 'Install':
                if(!gameInstalled) {
                    games.push(game);
                }
                break;
            case 'Uninstall':
                if(gameInstalled) {
                    games.splice(games.indexOf(game), 1);
                }
                break;
            case 'Update':
                if(gameInstalled) {
                    games.splice(games.indexOf(game), 1);
                    games.push(game);
                }
                break;
            case 'Expansion':
                let delimeter = game.split('-');
                game = delimeter[0];
                let expansion = delimeter[1];

                if(games.includes(game)) {
                    let gameExpansion = `${game}` + `:${expansion}`;
                    games.splice(games.indexOf(game) + 1, 0, gameExpansion);
                }
                break;
        }     
    }
    console.log(games.join(' '));  
}