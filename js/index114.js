function revert (username) {
    if (typeof username == 'string'){
        let result = '';
        result = username.charAt(4).concat(username.charAt(3)).concat(username.charAt(2)).concat(username.charAt(1)).concat(username.charAt(0));
        console.log(result);
    } else {
        console.log('Please enter string values only.');
    }
}

revert('hello');
revert('hello');
revert('hello');
revert('hello');
revert('hello');
revert(15);