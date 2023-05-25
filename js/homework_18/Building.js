export class Building {
    apartments = [];

    constructor (maxApartments) {
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        const apartmentsNumber = this.apartments.length;
        const maxApartments = this.maxApartments;
        if (apartmentsNumber < maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log('The building is already full of apartments');
        }
    }
}
