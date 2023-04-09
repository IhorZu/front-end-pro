'use strict';

let userName = prompt('What is your name?');

if (!userName) {
    userName = 'stranger';
}

alert(`Nice to meet you ${userName}`);
