let n = 7;
for (let i = 0; i < n; i++) {
    let str = '';
    for (let k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
}