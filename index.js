function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    return function iAmAFunction() {}
}

function returnsAnAnonymousFunction() {
    return function (){}
}