function loadingBar(percentage) {
    let bar = [];
    console.log();

    if(percentage == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return;
    }

    for(let i = 10; i <= 100; i += 10) {
        if(i <= percentage) {
            bar.push('%');
        } else {
            bar.push('.');
        }
    }

    console.log(`${percentage}% [${bar.join('')}]`);
    console.log('Still loading...');
}

loadingBar(50);