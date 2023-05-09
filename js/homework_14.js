'use strict';

/*
Given an array of objects.
Display an array of phone numbers of users whose balance is more than $2,000.
And find the sum of all user balances.
============================================================================= */

let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
];

const parseBalance = (data) => {
    data.forEach((value) => {
        const currentBalance = value.balance;
        value.balance = +currentBalance.slice(1).replace(',', '');
    });
}

const getBalanceSum = (data) => {
    const balanceSum = data.reduce((acc, value) => acc + value.balance, 0);
    return +balanceSum.toFixed(2);
}

const getFilteredPhones = (data) => {
    const MIN_BALANCE = 2000;
    return data.reduce((acc, value) => {
        if (value.balance > MIN_BALANCE) {
            acc.push(value.phone);
            return acc;
        }
        return acc;
    }, []);
}

const userBalanceAndPhone = users.map((value) => {
    return {
        balance: value.balance,
        phone: value.phone,
    }
});

parseBalance(userBalanceAndPhone);

const filteredPhones = getFilteredPhones(userBalanceAndPhone);
console.log( filteredPhones );

const balanceSum = getBalanceSum(userBalanceAndPhone);
console.log( balanceSum );
