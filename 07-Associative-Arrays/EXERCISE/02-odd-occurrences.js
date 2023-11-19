// used Map because there are numbers as keys
function oddOccurrences(str) {
    const occurrences = new Map();
    let occurrencesArr = [];

    let token = str.split(' ').map(el => el.toLowerCase());
    
    for (let el of token) {
        occurrences.set(el, occurrences.get(el) + 1 || 1);
    }

    occurrences.forEach((value, key) => {
        if (value % 2 != 0) {
            occurrencesArr.push(key);
        }
    })

    console.log(occurrencesArr.join(' '));  
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');