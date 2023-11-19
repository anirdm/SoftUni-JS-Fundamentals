function piccolo(arr) {
    const parkingLot = new Set();

    for (car of arr) {
        let [direction, carNumber] = car.split(', ');
   
        if (direction == 'IN') {
            parkingLot.add(carNumber);
        } else if (direction == 'OUT'){
            parkingLot.delete(carNumber)
        }
    }

    let sortedLot = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
    console.log(sortedLot.join('\n'));
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);