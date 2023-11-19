function wordsTracker(arr) {
    let wordOccurences = {};

    let searchedWords = arr.shift().split(' ');
    searchedWords.forEach(x => wordOccurences[x] = 0);

    for (let word of arr) {
        if (searchedWords.includes(word)) {
            wordOccurences[word] += 1;
        }
    }
    
    let entries = Object.entries(wordOccurences).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']);