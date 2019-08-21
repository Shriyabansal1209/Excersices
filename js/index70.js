let numbers = 1;
let sum = 0;
while (numbers <= 1000) {
    if (numbers % 2 != 0) {
        sum = sum + numbers;
        console.log(sum, numbers);
    }
    numbers++;
}