//function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();  //calls the passed-in callback function
}

//function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
    }
    return namedFunction;  //returns the named function
}

//function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {

    };
}