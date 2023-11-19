function modernTimesOfHashTag(str) {
    let specialWords = [];

    let words = str.split(' ');
    words.filter(x => x.includes('#') && /^[a-zA-Z#]+$/.test(x) && x.length > 1).forEach(x => specialWords.push(x));

    for (let specialWord of specialWords) {
        console.log(specialWord.replace('#', ''));
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');