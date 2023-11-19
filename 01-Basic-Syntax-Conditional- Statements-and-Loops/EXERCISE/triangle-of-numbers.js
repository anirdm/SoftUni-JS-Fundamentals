function triangleOfnumbers (input) {
    let str = '';

    for (let row = 1; row <= input; row++) {
        for (let col = 0; col <= input; col++) {
            if (col < row) {
                if (col == row) {
                    str += row;
                } else {
                    str += row + ' ';
                } 
            }
        }
        console.log(str);
        str = '';
    }
}