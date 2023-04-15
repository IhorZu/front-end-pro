'use strict';

const hours = +prompt('Enter number of hours, number only');
const seconds = (hours * 60) * 60;

if (hours) {
    alert(`${hours} hour(s) is ${seconds} seconds`);
} else {
    alert('You didn\'t enter a number');
}
