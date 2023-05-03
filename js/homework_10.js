'use strict';

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]; // initial data

/* 1. Find the sum and number of positive elements
================================================== */

const positiveValues = arr.filter((value) => value > 0);
const numberOfPositiveValues = positiveValues.length;
const sumOfPositiveValues = positiveValues.reduce((acc, value) => {
    return acc + value;
}, 0);

console.log(`Number of positive elements: ${numberOfPositiveValues}. Sum is ${sumOfPositiveValues}`);

/* 2. Find the minimum array element and it's sequence number
============================================================ */

let initialValue = {
    value: 0,
    index: 0,
};

const minArrayElement = arr.reduce((acc, value, index) => {
    if (value < acc.value) {
        acc.value = value;
        acc.index = index;
    }
    return acc;
}, initialValue);

console.log(`The minimum array element is ${minArrayElement.value} and it's sequence number is ${minArrayElement.index}`);

/* 3. Find the maximum array element and it's sequence number
============================================================ */

initialValue = {
    value: 0,
    index: 0,
};

const maxArrayElement = arr.reduce((acc, value, index) => {
    if (value > acc.value) {
        acc.value = value;
        acc.index = index;
    }
    return acc;
}, initialValue);

console.log(`The maximum array element is ${maxArrayElement.value} and it's sequence number is ${maxArrayElement.index}`);

/* 4. Find the number of negative elements
========================================== */

const negativeValues = arr.filter((value) => value < 0);
const numberOfNegativeValues = negativeValues.length;

console.log(`The number of negative elements is ${numberOfNegativeValues}`);

/* 5. Find the result of multiplying the positive elements
========================================================== */

// positiveValues already found in the 1st task
const multiplicationOfPositiveValues = positiveValues.reduce((acc, value) => {
    return acc * value;
}, 1);

console.log(`The result of multiplying the positive elements is ${multiplicationOfPositiveValues}`);
