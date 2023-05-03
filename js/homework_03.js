'use strict';

const firstOperand = +prompt('Enter first operand, only number');
const secondOperand = +prompt('Enter second operand, only number');
const mathOperator = prompt('Enter math operator (+, -, /, *)');

if (firstOperand && secondOperand) {
    switch (mathOperator) {
        case '+':
            alert(firstOperand + secondOperand);
            break;
        case '-':
            alert(firstOperand - secondOperand);
            break;
        case '/':
            alert(firstOperand / secondOperand);
            break;
        case '*':
            alert(firstOperand * secondOperand);
            break;
        default:
            alert('Math operator is not valid');
            break;
    }
} else {
    alert('One of the operands is not a number');
}
