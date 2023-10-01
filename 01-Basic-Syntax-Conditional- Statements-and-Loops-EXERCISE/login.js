function login (arr) {
    let username = arr[0];

    for (let i = 1; i <= 4; i++) {      
        let passwordReversed = arr[i].split('').reverse().join('');
        
        if (passwordReversed == username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i < 4) {
                console.log('Incorrect password. Try again.');   
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
                   
        }
    }  
}
