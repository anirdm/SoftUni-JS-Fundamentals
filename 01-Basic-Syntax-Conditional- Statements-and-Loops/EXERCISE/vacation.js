function vacation (groupNum, type, day) {
    let totalPrice = 0;
    
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    totalPrice = groupNum * 8.45;
                    break;
                case 'Saturday':
                    totalPrice = groupNum * 9.8;
                    break;
                case 'Sunday':
                    totalPrice = groupNum * 10.46;
                    break;
            }

            if (groupNum >= 30) {
                totalPrice *= 0.85;
            }

            break;
        case 'Business':
            if (groupNum >= 100) {
                groupNum -= 10;
            }

            switch (day) {    
                case 'Friday':
                    totalPrice = groupNum * 10.9;
                    break;
                case 'Saturday':
                    totalPrice = groupNum * 15.6;
                    break;
                case 'Sunday':
                    totalPrice = groupNum * 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    totalPrice = groupNum * 15;
                    break;
                case 'Saturday':
                    totalPrice = groupNum * 20;
                    break;
                case 'Sunday':
                    totalPrice = groupNum * 22.5;
                    break;
            } 

            if (groupNum >= 10 && groupNum <= 20) {
                totalPrice *= 0.95;
            }

            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}