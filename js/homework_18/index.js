'use strict';

class Human {
    constructor (name, gender) {
        this.name = name || 'Ihor';
        this.gender = gender || 'male';
    }
}

class Apartment {
    residents = [];

    addResident(human) {
        this.residents.push(human);
    }
}

const human = new Human();
const apartment = new Apartment();

console.log(human);
console.log(apartment);

apartment.addResident(human);
