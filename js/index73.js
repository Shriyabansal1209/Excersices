
let i = 1;
let j = 1;
let z = '';

while (i < 10) {
    while (j < 10) {
        if (i >= j) {
           z += '*';
            console.log(z);
        }
        j++;
        //console.log(z);
    }
    i++;
    //console.log(z);
}
console.log(z);