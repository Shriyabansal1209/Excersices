const showName = function () {
    const name = 'Nicolás';
    const countLength = name.length;
    let i = 0;
    do {
        console.log('=');
        i++;
    } while (i <= countLength);
    /*for (let i = 0; i <= countLength; i++) {
        console.log('=');
        console.log(name);
    }*/
    console.log(countLength);
}

showName();
showName();