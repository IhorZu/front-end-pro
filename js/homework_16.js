'use strict';

/*
Create a function with closure.
=============================== */

const makeSum = () => {
    let sum = 0;

    return (n = 0) => {
        return sum += n;
    }
}

const sum = makeSum();

console.log( sum(3) );
console.log( sum(5) );
console.log( sum(20) );
