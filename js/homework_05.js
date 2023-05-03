'use strict';

const firstOperand = +prompt('Enter first operand, number only');
const secondOperand = +prompt('Enter second operand, number only');
const thirdOperand = +prompt('Enter third operand, number only');

if (firstOperand && secondOperand && thirdOperand) {
    const arithmeticMean = (firstOperand + secondOperand + thirdOperand) / 3;
    alert(`The arithmetic mean is ${arithmeticMean}`);
} else {
    alert('One of the operands is not a number');
}
