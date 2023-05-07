'use strict';

/* 1. Given an array with elements of different types.
Create a function that calculates the arithmetic mean of only the numerical elements of this array.
=================================================================================================== */

const arr = [2, null, 5, 8, 'string', 10, [], true, {}, 3, 7, false, ''];

const calcArithmeticMean = (array) => {
    const numericArr = array.filter((value) => typeof value === 'number');

    if (numericArr.length > 0) {
        const amount = numericArr.length;
        const sum = numericArr.reduce((acc, value) => acc + value, 0);
        return sum / amount;
    }

    console.log('There are no numerical values in the array');
};

calcArithmeticMean(arr);

/* 2. Create the function doMath(x, y, operator) that takes 3 arguments: numbers x and y, string with operator.
The operator may be: +, -, *, /, %, ^.
Display the result of the math operation specified in the operator.
Both numbers and operator come from the user.
=============================================================================================================== */

const firstOperand = +prompt('Enter first operand, number only');
const secondOperand = +prompt('Enter second operand, number only');
const mathOperator = prompt('Enter math operator (+, -, /, *, %, ^)');

const doMath = (x, y, operator) => {
    if (x && y) {
        switch (operator) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '/':
                return x / y;
            case '*':
                return x * y;
            case '%':
                return x % y;
            case '^':
                return x ** y;
            default:
                console.log('Math operator is not valid');
        }
    } else {
        console.log('One of the operands is not a number');
    }
}

doMath(firstOperand, secondOperand, mathOperator);

/* 3. Create a function for filling a two-dimensional array with user data.
The length of the main array and internal arrays is set by the user.
The value of all elements of all arrays is set by the user.
=========================================================================== */

const fillingTwoDimensionalArray = (mainArrLength) => {
    const mainArr = new Array(mainArrLength);

    for (let i = 0; i < mainArr.length; i++) {
        const innerArrLength = +prompt(`Enter length of ${i + 1} inner array, number only`, '3');
        const innerArr = new Array(innerArrLength);

        for (let j = 0; j < innerArr.length; j++) {
            innerArr[j] = prompt(`Enter ${j + 1} value of ${i + 1} inner array`);
        }
        mainArr[i] = innerArr;
    }

    return mainArr;
}

const arrLength = +prompt('Enter length of main array, number only', '3');

if (arrLength) {
    fillingTwoDimensionalArray(arrLength);
} else {
    console.log('You didn\'t enter a number');
}

/* 4. Create a function that removes from the string all the characters that we provided with the second argument.
function ('hello world', ['l', 'd']) should return 'heo wor'.
The output string and the characters to be removed are set by the user.
================================================================================================================== */

const removeChars = (str, chars) => {
    str = str.split('');

    for (let i = 0; i < chars.length; i++) {
        str = str.map((value) => {
            if (value !== chars[i]) {
                return value;
            }
            return '';
        });
    }

    return str.join('');
}

const string = prompt('Enter some text', 'hello world');
const characters = prompt('Enter characters you want to delete', 'ld').split('');

if (string && characters.length > 0) {
    removeChars(string, characters);
} else {
    console.log('You haven\'t entered any text and/or character to be removed from this text');
}
