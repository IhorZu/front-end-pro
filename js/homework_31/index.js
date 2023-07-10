'use strict';

const formElem = document.querySelector('.form--registration');

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

formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    const sectionInputElem = document.querySelector('.section-input');
    const sectionOutputElem = document.querySelector('.section-output');
    const nameElem = document.querySelector('.output-name');
    const surnameElem = document.querySelector('.output-surname');
    const birthElem = document.querySelector('.output-birth');
    const genderElem = document.querySelector('.output-gender');
    const cityElem = document.querySelector('.output-city');
    const addressElem = document.querySelector('.output-address');
    const languageElem = document.querySelector('.output-language');
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
})