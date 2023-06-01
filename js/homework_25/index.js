'use strict';

const votesData = [5,1,2,0,0];
const votesButtons = document.querySelectorAll('.votes__btn');

votesButtons.forEach(function(element, key) {
    // add number of votes to each 'votes__number' container
    let votes = votesData[key];
    const votesNumberEl = element.nextElementSibling;
    votesNumberEl.setAttribute('data-votes', `${votes}`);

    // increase the number of votes by clicking on the votes button
    element.addEventListener('click', function() {
        votesNumberEl.dataset.votes = `${++votes}`;
    });
});
