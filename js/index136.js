const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

mutants.forEach(function(mutant) {
  //console.log(mutant);
    for (let i = 0; i < mutants.length; i++) { 
        if (mutants[i] === 'Iceman') {
            //console.log(i);
            const Iceman = mutants.splice(i);
            console.log(Iceman);
        }
    }
});
