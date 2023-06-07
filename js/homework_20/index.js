'use strict';

import { Student } from './Student.js';

// init
const student = new Student('Ihor', 'Zuikov', 1988, [100,90,85,100,90]);

student.present();
student.present();
student.present();
student.absent();
student.present();

console.log( student.summary() );
