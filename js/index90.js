let numbers;
let sum = 0;
for (numbers = 1; numbers <= 1000; numbers++){
    if (numbers % 2 != 0) {
        sum = sum + numbers;
        console.log(sum, numbers);
    } 
}