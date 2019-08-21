let perimeter = 0;
function getShapePerimiter (base, height) {
    if (base == height) {
        perimeter = 4 * base;
        console.log(perimeter, 'is the shape perimiter');
        if (perimeter > 100) {
            console.log('The perimiter is to big');
        } else {
            console.log('The perimiter is fine');
        }
    } else {
        perimeter = 2 * (base + height); 
        console.log(perimeter, 'is the shape perimiter');
        if (perimeter > 100) {
            console.log('The perimiter is to big');
        } else {
            console.log('The perimiter is fine');
        }
    }
}



getShapePerimiter(10,20);
getShapePerimiter(10,10);
getShapePerimiter(20,10);
getShapePerimiter(40,40);