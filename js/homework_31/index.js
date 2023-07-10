'use strict';

const getSelector = (selector) => {
    return document.querySelector(selector);
}

const initFormData = (form) => {
    const formData = new FormData(form);

    return (el, key) => {
        if (key === 'language') {
            el.textContent = formData.getAll(key);
        } else {
            el.textContent = formData.get(key);
        }
    }
}

const formSubmit = (e) => {
    e.preventDefault();

    const sectionInputElem = getSelector('.section-input');
    const sectionOutputElem = getSelector('.section-output');
    const nameElem = getSelector('.output-name');
    const surnameElem = getSelector('.output-surname');
    const birthElem = getSelector('.output-birth');
    const genderElem = getSelector('.output-gender');
    const cityElem = getSelector('.output-city');
    const addressElem = getSelector('.output-address');
    const languageElem = getSelector('.output-language');
    const getFormData = initFormData(formElem);

    sectionInputElem.classList.add('is-hidden');
    sectionOutputElem.classList.remove('is-hidden');

    getFormData(nameElem, 'name');
    getFormData(surnameElem, 'surname');
    getFormData(birthElem, 'birth');
    getFormData(genderElem, 'gender');
    getFormData(cityElem, 'city');
    getFormData(addressElem, 'address');
    getFormData(languageElem, 'language');
}

const formElem = document.querySelector('.form--registration');
formElem.addEventListener('submit', formSubmit);