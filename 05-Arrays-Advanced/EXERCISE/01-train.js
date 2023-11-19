function train(arr) {
    let passengersPerWagon = arr[0].split(' ').map(Number);
    let capacity = Number(arr[1]);

    for(let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ');

        if(tokens[0] == 'Add') {
            let passengers = Number(tokens[1]);
            passengersPerWagon.push(passengers);
        } else {
            let passengers = Number(tokens[0]);

            for(let index = 0; index < passengersPerWagon.length; index++) {
                if(passengersPerWagon[index] + passengers <= capacity) {
                    passengersPerWagon[index] += passengers;
                    break;
                }
            }
        }
    }
    console.log(passengersPerWagon.join(' '));
}
