'use strict';

/*
Create a recursive function that raises a number to a power.
============================================================ */

const pow = (num, degree) => {
    if (degree === 1) {
        return num;
    }
    return num * pow(num, degree - 1);
}

console.log( pow(5, 3) );
