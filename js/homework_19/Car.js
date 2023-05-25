export class Car {
    owner = null;

    constructor (brand, model, releaseYear) {
        this.brand = brand;
        this.model = model;
        this.releaseYear = releaseYear;
    }

    assignOwner(human) {
        if (human.age > 18) {
            this.owner = human;
        }
    }

    getInfo() {
        console.log(`${this.brand} ${this.model}, release year is ${this.releaseYear}`);
        if (this.owner) {
            this.owner.getInfo();
        } else {
            console.log('This car has no owner');
        }
    }
}
