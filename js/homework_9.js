'use strict';

const arr = [10,1,500,15,102,3,38,11,8,14,0,12,80,174,3,20,25,51,198,74,9];
let result = [];

/* 1. Display the numbers from 10 to 20 on the page in one line separated by commas
=================================================================================== */

result = arr.filter((value) => value >= 10 && value <= 20);

console.log(result.join(', '));

/* 2. Display the squares of numbers from 10 to 20
================================================== */

result = [];

arr.forEach((value) => {
    if (value >= 10 && value <= 20) {
        result.push(value * value);
    }
});

console.log(result.join(', '));

/* 3. Display the multiplication table by 7
=========================================== */

arr.forEach((value) => {
    console.log(`${value} * 7 = ${value * 7}`);
});

/* 4. Find the sum of all integers from 1 to 15
=============================================== */

result = [];

result = arr.reduce((acc, value) => {
    return (value >= 1 && value <= 15 && Number.isInteger(value)) ? acc + value : acc;
}, 0);

console.log(result);

/* 5. Find the result of multiplying all integers from 15 to 35
=============================================================== */

result = [];

result = arr.reduce((acc, value) => {
    return (value >= 15 && value <= 35 && Number.isInteger(value)) ? acc * value : acc;
}, 1);

console.log(result);

/* 6. Find the arithmetic mean of all integers from 1 to 500
============================================================ */

result = [];

result = arr.filter((value) => value >= 1 && value <= 500 && Number.isInteger(value));

result = result.reduce((acc, value, index, array) => {
    if (index === array.length - 1) {
        return (acc + value) / array.length;
    }
    return acc + value;
}, 0);

console.log(result);

/* 7. Display the sum of only even numbers in the range from 30 to 80
===================================================================== */

result = [];

result = arr.reduce((acc, value) => {
    return (value >= 30 && value <= 80 && !(value % 2)) ? acc + value : acc;
}, 0);

console.log(result);

/* 8. Display all numbers in the range from 100 to 200 that are multiples of 3
============================================================================== */

result = [];

result = arr.filter( (value) => value >= 100 && value <= 200 && !(value % 3) );

console.log(result.join(', '));
