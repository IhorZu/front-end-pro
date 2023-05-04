'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const removeElement = (array, value) => {
    const index = array.indexOf(value);

    if (index !== -1) {
        array.splice(index, 1);
        console.log(array);
    } else {
        console.log('This value doesn\'t exist in array');
    }
}

const numValue = prompt('Enter the number you would like to remove from array (from 1 to 9)');

if (numValue !== null) {
    removeElement(arr, +numValue);
} else {
    console.log('You didn\'t enter any value');
}
