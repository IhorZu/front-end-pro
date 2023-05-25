'use strict';

import { Human } from './Human.js';
import { Apartment } from './Apartment.js';
import { Building } from './Building.js';

// init
const Ihor = new Human();
const Anna = new Human('Anna', 'female');
const John = new Human('John');
const Katie = new Human('Katie', 'female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(Ihor);
apartment1.addResident(Anna);
apartment2.addResident(John);
apartment3.addResident(Katie);

const building = new Building(10);

building.addApartment(apartment1);
building.addApartment(apartment2);
building.addApartment(apartment3);
