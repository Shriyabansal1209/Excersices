const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
for (let i = 0; i < mutants.length; i++) {
    console.log(mutants[i]); 
    if (mutants[i] === 'Magneto') {
        break;
    }
}

for (let i = 0; i < mutants.length; i++) { 
    if (mutants[i] === 'Magneto') {
        console.log(i);
        const Magneto = mutants.splice(i,i-3);
    }
}
for(let j = 0; j < mutants.length; j++){
    mutants[j] = mutants[j].toUpperCase();
}
console.log(mutants);
