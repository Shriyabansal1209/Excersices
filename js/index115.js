function getLongerText (n1, n2) {
    if ((typeof n1 == 'string') && (typeof n2 == 'string')) {
        console.log(n1, n2);
    } else {
        console.log('Please enter string values.');
    }
}

getLongerText('longer', 'Text');
getLongerText('longer', '');
getLongerText('', 'Text');
getLongerText('longer', 'Text');
getLongerText(165, 'Text');