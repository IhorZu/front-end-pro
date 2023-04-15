'use strict';

// get birth year
const birthYear = +prompt('Enter your year of birth, number only');

if (birthYear) {
    const date = new Date();
    const age = date.getFullYear() - birthYear;
    alert(`You are ${age} years old or will be this year`);
} else {
    alert('You didn\'t enter a year');
}

// get city
const myCity = prompt('What city do you live in?');

if (myCity) {
    switch (myCity) {
        case 'Kyiv':
            alert(`You live in the capital of Ukraine`);
            break;
        case 'London':
            alert(`You live in the capital of Great Britain`);
            break;
        case 'Washington':
            alert(`You live in the capital of USA`);
            break;
        default:
            alert(`You live in ${myCity}`);
            break;
    }
} else {
    alert('You didn\'t enter a city');
}

// get favorite sport
const favoriteSport = prompt('What is your favorite sport?');

if (favoriteSport) {
    switch (favoriteSport) {
        case 'football':
            alert(`Cool! Do you wanna be like Lionel Messi?`);
            break;
        case 'basketball':
            alert(`Cool! Do you wanna be like Michael Jordan?`);
            break;
        case 'boxing':
            alert(`Cool! Do you wanna be like Mike Tyson?`);
            break;
        default:
            alert(`Cool! ${favoriteSport} is nice`);
            break;
    }
} else {
    alert('You didn\'t enter favorite sport');
}