function getHexaColor (n1) {
    if (n1 == 'white') {
        console.log('#FFFFFF');
    } else if (n1 == 'black') {
        console.log('#000000');
    } else if (n1 == 'blue') {
        console.log('#0b24fb');
    } else if (n1 == 'green') {
        console.log('#0e7e12');
    } else if (n1 == 'yellow') {
        console.log('#fffd38');
    } else if (n1 == 'pink') {
        console.log('#fec1cc');
    } else {
        console.log('Please enter a valid color');
    }
}

getHexaColor('white');
getHexaColor('black');
getHexaColor('blue');
getHexaColor('green');
getHexaColor('yellow');
getHexaColor('pink');
getHexaColor('red');