'use strict';

import { Human } from './Human.js';
import { Car } from './Car.js';

// init
const humanIhor = new Human('Ihor', 34);
const humanJohn = new Human('John', 21);

const seatLeon = new Car('Seat', 'Leon', 2008);
const toyotaCamry = new Car('Toyota', 'Camry', 2015);

seatLeon.assignOwner(humanIhor);
toyotaCamry.assignOwner(humanJohn);
