function showNumbers (start, end) {
    if (start > end) {
        for (start = start; start >= end; start--) {
            console.log(start);
        } 
    } else if (end > start) {
            for (start = start; start <= end; start++) {
            console.log(start);
        }
    } else if (start == end) {
        console.log('The start and end are same i.e.', start, end);
    } else if ((typeof start != 'number') || (typeof end != 'number')) {
        console.log('Please enter a number');
    } else {
        console.log('Please enter a number');
    }
}

showNumbers(0,10);
showNumbers(10,0);
showNumbers(10,10);
showNumbers('10',20);
showNumbers('a',20);