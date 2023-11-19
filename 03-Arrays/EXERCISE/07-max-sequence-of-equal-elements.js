function maxSequenceEqualElements(arr) {
    let currSeq = [];
    let longestSeq = [];

    for(let i = 0; i < arr.length; i++) {
        let currElement = Number(arr[i]);
        currSeq.push(currElement);

        let nextElement = Number(arr[i + 1]);

        if(currElement != nextElement) {
            if(currSeq.length > longestSeq.length) {
                longestSeq = [];
                for (let i = 0; i < currSeq.length; i++) {
                    longestSeq.push(currSeq[i]);
                }
            }
            currSeq = [];
        }      
    }

    console.log(longestSeq.join(' '));
}
