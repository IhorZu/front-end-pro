export class Hamburger {

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_BIG = { price: 100, calories: 40 };

    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 20, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };

    static TOPPING_SAUCE = { price: 15, calories: 0 };
    static TOPPING_MAYO = { price: 20, calories: 5 };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculateCalories() {
        if (this.toppings.length) {
            const toppingCalories = this.toppings.reduce((sum, topping) => sum + topping.calories, 0);
            return this.size.calories + this.stuffing.calories + toppingCalories;
        }
        return this.size.calories + this.stuffing.calories;
    }

    calculatePrice() {
        if (this.toppings.length) {
            const toppingPrice = this.toppings.reduce((sum, topping) => sum + topping.price, 0);
            return this.size.price + this.stuffing.price + toppingPrice;
        }
        return this.size.price + this.stuffing.price;
    }
}
