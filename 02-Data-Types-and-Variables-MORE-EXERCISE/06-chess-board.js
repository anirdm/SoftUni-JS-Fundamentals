function chessBoard(size) {
    let result = '<div class="chessboard">\n';

    for(let i = 1; i <= size; i++) {
        result += '    <div>\n'
        for(let span = 1; span <= size; span++) {
            let color = (i + span) % 2 == 0 ? 'black' : 'white';
            result +=`         <span class="${color}"></span>\n`
        }       
        result += '    </div>\n'
    }

    result += '</div>\n';
    console.log(result);
}


chessBoard(3);
