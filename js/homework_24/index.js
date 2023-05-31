'use strict';

const httpsCheck = (element) => {
    const href = element.getAttribute('href');
    if (!href.includes('https')) {
        httpsSet(element, href);
    }
}

const httpsSet = (element, href) => {
    element.setAttribute('href', `https://${href}`);
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(httpsCheck);
