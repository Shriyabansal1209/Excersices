let sum = 0;
for (let numbers = 0; numbers <= 1000; numbers++){
    sum = sum + numbers;
    console.log(sum, numbers);
    if (sum >= 400) {
        break;
    } 
}