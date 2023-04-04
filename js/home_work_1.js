'use strict';

let userName = prompt('What is your name?');

if (!userName) {
    userName = 'stranger';
}

alert(`Hello, ${userName}! How are you?`);
