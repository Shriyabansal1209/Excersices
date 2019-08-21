const fibonacci = function () {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= 10; i++) {
        f = a + b;
        a = b;
        b = f;
        console.log(f);
    }
    
}

fibonacci();
fibonacci();
fibonacci();