'use strict';

let ageAlertText,
    cityAlertText,
    sportAlertText;

// get birth year
const birthYear = +prompt('Enter your year of birth, number only');

if (birthYear) {
    const date = new Date();
    const age = date.getFullYear() - birthYear;
    ageAlertText = `You are ${age} years old or will be this year.`

    // get city
    const myCity = prompt('What city do you live in?');

    if (myCity) {
        switch (myCity) {
            case 'Kyiv':
                cityAlertText = `You live in the capital of Ukraine.`;
                break;
            case 'London':
                cityAlertText = `You live in the capital of Great Britain.`;
                break;
            case 'Washington':
                cityAlertText = `You live in the capital of USA.`;
                break;
            default:
                cityAlertText = `You live in ${myCity}.`;
                break;
        }

        // get favorite sport
        const favoriteSport = prompt('What is your favorite sport?');

        if (favoriteSport) {
            switch (favoriteSport) {
                case 'football':
                    sportAlertText = `Cool! Do you wanna be like Lionel Messi?`;
                    break;
                case 'basketball':
                    sportAlertText = `Cool! Do you wanna be like Michael Jordan?`;
                    break;
                case 'boxing':
                    sportAlertText = `Cool! Do you wanna be like Mike Tyson?`;
                    break;
                default:
                    sportAlertText = `Cool! ${favoriteSport} is nice.`;
                    break;
            }

            // display result
            alert(`${ageAlertText}\n${cityAlertText}\n${sportAlertText}`);
        } else {
            alert('You didn\'t enter favorite sport');
        }
    } else {
        alert('You didn\'t enter a city');
    }
} else {
    alert('You didn\'t enter a year');
}
