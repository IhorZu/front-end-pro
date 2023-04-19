'use strict';

const MAX_ELEMENTS_NUMBER = 10;
const MIN_LENGTH = 5;
const SPLICE_START = 2;
const SPLICE_DELETE_COUNT = 4;
const elementsNumber = +prompt('Enter number of elements in array (number from 1 to 10)');

if (elementsNumber && elementsNumber <= MAX_ELEMENTS_NUMBER) {
    let customArr = [];

    for (let i = 0; i < elementsNumber; i++) {
        const arrValue = prompt(`Enter the value of the ${i+1} element in array`);
        customArr.push(arrValue);
    }
    console.log(customArr, 'Created new custom array');

    customArr.sort( (a, b) => a - b );
    console.log(customArr, 'Sorted custom array');

    if (customArr.length >= MIN_LENGTH) {
        customArr.splice(SPLICE_START, SPLICE_DELETE_COUNT);
        console.log(customArr, 'Spliced custom array');
    }

} else {
    console.log('You didn\'t enter a number or entered an invalid value');
}
