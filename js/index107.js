function biggerNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber){
        console.log('Number', firstNumber, 'is bigger than', secondNumber);
    } else if (firstNumber < secondNumber) {
        console.log('Number', secondNumber, 'is bigger than', firstNumber);
    } else if (firstNumber == secondNumber){
        console.log('Both numbers are:', firstNumber);
    } else {
        if ((typeof firstNumber || typeof secondNumber) != 'number') {
            console.log('Please enter a number!');
        } else {
            console.log('It is a number');
        }
    }
}

biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber('A',5);