function stringSubstring(word, text) {
    let textWords = text.split(' ');

    for (let wordToCompare of textWords) {
        if (wordToCompare.localeCompare(word, undefined, {sensitivity: 'base'}) == 0) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

stringSubstring('python','JavaScript is the best programming language');