'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const KEY_LENGTH = 16;

const generateKey = (length, char) => {
    let randomIndex = null;
    let key = '';

    for (let i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * char.length);
        key += char.at(randomIndex);
    }

    return key;
}

const key = generateKey(KEY_LENGTH, characters);

console.log(key);
