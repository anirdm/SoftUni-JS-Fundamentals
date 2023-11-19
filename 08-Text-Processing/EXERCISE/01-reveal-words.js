function revealWords(str1, str2) {
    let words = str1.split(', ');
    let replacedText = str2;
    
    for (let word of words) {
        let censoredWord = '*'.repeat(word.length);
        replacedText = replacedText.replace(censoredWord, word);      
    }

    console.log(replacedText);   
}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages');