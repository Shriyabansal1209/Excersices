const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
let mutantsSpliced = '';
let mutantsSplice1 = '';
let mutantsSplice2 = '';
let mutantsSplice3 = '';


const mutantsFilter = mutants.filter(function(mutant) {
    let index = mutants.indexOf('Magneto');
        if (index > -1) {
            mutantsSplice1 = mutants.splice(index, 1);
        }
    let index2 =  mutants.indexOf('Iceman');
        if (index2 > -1) {
            mutantsSplice2 = mutants.splice(index2, 1);
        }
    let index3 =  mutants.indexOf('Gambit');
        if (index3 > -1) {
            mutantsSplice3 = mutants.splice(index3, 1);
        }
    mutantSpliced = mutantsSplice1.concat(mutantsSplice2).concat(mutantsSplice3);
});
console.log(mutants);
console.log(mutantSpliced);