export class Human {
    constructor (name, age) {
        this.name = name || 'Ihor';
        this.age = age || 19;
    }

    getInfo() {
        console.log(`${this.name}, ${this.age} years old`);
    }
}
