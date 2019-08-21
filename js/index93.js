let z = "";
for(let i = 1; i < 10; i++ ){
    for(let j = 1; j < 10; j++){
        if( j >= i ){
            z = z.concat("*");
        }
    }
    z = z.concat("\n")
}

console.log(z)