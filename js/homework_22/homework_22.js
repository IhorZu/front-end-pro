'use strict';

const textField = document.querySelector('.text-field');
const textFieldHint = document.querySelector('.text-field-hint');
const textFieldHintHiddenClass = 'text-field-hint--hidden'

textField.addEventListener('focus', () => {
    textFieldHint.classList.remove(textFieldHintHiddenClass);
});

textField.addEventListener('blur', () => {
    textFieldHint.classList.add(textFieldHintHiddenClass);
});
