'use strict';

const numOrStr = prompt('Input number or string');

switch (numOrStr) {
    case null:
        console.log('You canceled')
        break;
    case '':
        console.log('Empty String');
        break;
    case NaN:
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
        break;
}