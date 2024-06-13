
function buggyFunction(a, b) {
    var result = 0; // Unused variable
    var unusedVar;

    if (a == null) { // Non-strict equality comparison
        console.log('a is null or undefined');
    } else {
        console.log('a is not null or undefined');
    }

    for (var i = 0; i < 10; i++) { // Loop with constant condition
        result = result + i // Missing semicolon
    }

    // Function without return statement
    function innerFunction() {
        var innerVar = "I'm an inner variable";
        console.log(innerVar);
    }

    innerFunction();

    var obj = {
        'key': 'value'
    };

    if (obj.key = 'newValue') { // Assignment in conditional
        console.log('key has new value');
    }

    switch(a) {
        case 1:
            console.log('a is 1');
            break;
        case 2:
            console.log('a is 2');
            break;
        default:
            console.log('a is something else');
    }
}

buggyFunction(1, 2);