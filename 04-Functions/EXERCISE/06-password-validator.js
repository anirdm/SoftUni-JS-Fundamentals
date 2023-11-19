function passwordValidator(password) {
    let validPassword = true;
    let digitsCount = 0;

    if(password.length < 6 || password.length > 10) {
        validPassword = false;
        console.log('Password must be between 6 and 10 characters');        
    }

    if(/^[A-Za-z0-9]*$/.test(password) == false) {
        validPassword = false;
        console.log('Password must consist only of letters and digits');       
    }

    for(el of password) {
        if(el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
            digitsCount++;
        }
    }

    if(digitsCount < 2) {
        validPassword = false;
        console.log('Password must have at least 2 digits');     
    }

    if(validPassword == true) {
        console.log('Password is valid');
    }
}