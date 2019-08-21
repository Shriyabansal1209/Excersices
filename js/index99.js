let sum = 0;
let add = 0;
for (let numbers = 1; numbers <= 100; numbers++){
    if (numbers % 2 == 0) {
        sum++;
        add = add + numbers;
        console.log(numbers, add);
        if (sum > 20) {
            break;
            console.log(numbers);
        }
    } 
}