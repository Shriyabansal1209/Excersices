const tripExpenses = [250, 100, 300];
const budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log('Hotel:', tripExpenses[0], 'Trip:', tripExpenses[1], 'Meals:', tripExpenses[2]);
console.log('Total Trip Budget:',budget);