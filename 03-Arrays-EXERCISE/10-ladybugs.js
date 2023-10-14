function ladybugs(arr) {
    let fieldSize = arr[0];
    let ladybugs = arr[1].split(' ').map(Number);
    let ladybugsResult = [];

    for(let i = 0; i < fieldSize; i++) {
        if(ladybugs.includes(i)) {
            ladybugsResult.push(1);
        } else {
            ladybugsResult.push(0);
        }
    }

    for(let i = 2; i < arr.length; i++) {
        let action = arr[i].split(' ');

        let ladybugIndex = Number(action[0]);
        let direction = action[1];
        let flyLength = Number(action[2]);

        // check if there is ladybug -> if there isn't  - continue
        if(!ladybugsResult[ladybugIndex]) {
            continue;
        }

        // if there is a ladybug
        ladybugsResult[ladybugIndex] = 0;

        //let newIndex = direction == 'left' ? ladybugIndex - flyLength : ladybugIndex + flyLength;

        if(direction == 'left') {
            let newIndex = direction = ladybugIndex - flyLength;

            if(newIndex >= 0) {
                while(ladybugsResult[newIndex] == 1) {
                    newIndex -= flyLength;
                }

                if(newIndex >= 0) {
                    ladybugsResult[newIndex] = 1;
                }             
            }
        } else {
            let newIndex = direction = ladybugIndex + flyLength;

            if(newIndex < ladybugsResult.length) {
                while(ladybugsResult[newIndex] == 1) {
                    newIndex += flyLength;
                }

                if(newIndex < ladybugsResult.length) {
                    ladybugsResult[newIndex] = 1;
                }
                
            }
        }
    }
    console.log(ladybugsResult.join(' '));
}

ladybugs([ 5, '3', '3 left 2', '1 left -2']);
//ladybugs([ 3, '0 1', '0 right 1','2 right 1' ]);
//ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);