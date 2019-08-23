const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbersFilter = numbers.filter(function(number) {
  for (let i = 0; i <= numbers.length; i++) {
    if (number % 2 == 0) {
      console.log(number);
    }  
      
  }
    
    
});