"use strict";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= 25 / 100 * this.price;
    }
}

let product1 = new Product('shirt', 100);
product1.make25PercentDiscount();