"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price -= 25 / 100 * this.price;
}

let product1 = new Product('shirt', 100);
product1.make25PercentDiscount();