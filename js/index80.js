let numbers = 1;
let sum = 0;
do {
    if (numbers % 2 != 0) {
        sum = sum + numbers;
        console.log(sum, numbers);
    } 
    numbers++;
}
while (numbers <= 1000);