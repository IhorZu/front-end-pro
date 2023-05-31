'use strict';

const root = document.querySelector('#root');

for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.classList.add('row');

    for (let j = 1; j <= 10; j++) {
        const randomNumber = Math.ceil(Math.random() * 100);
        const span = document.createElement('span');

        span.classList.add('col');
        span.append(`${randomNumber}`);
        div.append(span);
    }

    root.append(div);
}
