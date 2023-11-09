"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(type, date) {
        this.type = type;
        this.date = date;
    }
}
class DeliveryHome extends Delivery {
    constructor(type, date, address) {
        super(type, date);
        this.address = address;
    }
    setDelivery(type, date, address) {
        this.type = type;
        this.date = date;
        this.address = address;
    }
}
class DeliveryPickup extends Delivery {
    constructor(type, date, storeId) {
        super(type, date);
        this.storeId = storeId;
    }
    setDelivery(type, date, storeId) {
        this.type = type;
        this.date = date;
        this.storeId = storeId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        if (this.products.find((p) => p.id === product.id)) {
            return;
        }
        if (Array.isArray(product)) {
            if (!product.every(item => item)) {
                throw new Error('Переданн не верный массив объектов с типом Product');
            }
            else {
                this.products = [...this.products, ...product];
                return product;
            }
        }
        this.products.push(product);
    }
    removeProductById(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    getProductList() {
        return this.products;
    }
    calculateTotalCost() {
        let totalCost = 0;
        for (const product of this.products) {
            totalCost += product.price;
        }
        return totalCost;
    }
    checkout() {
        console.log('Thank you for your order!');
        console.log(`Products: ${this.products.map(function (num) {
            return num.name;
        })}`);
        if (this.delivery instanceof DeliveryPickup) {
            console.log(`Тип доставки: ${this.delivery.type} Дата: ${this.delivery.date} IdPickup: ${this.delivery.storeId}`);
        }
        if (this.delivery instanceof DeliveryHome) {
            console.log(`Тип доставки: ${this.delivery.type} Дата: ${this.delivery.date} Домашний адрес: ${this.delivery.address}`);
        }
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
}
let today = new Date();
let orderDate = today.toLocaleString();
const cart = new Cart();
const milk = new Product(1, 'Молоко', 800);
cart.addProduct(milk);
const toStore = new DeliveryPickup('pick-point', orderDate, 777);
const toHome = new DeliveryHome('home', orderDate, 'г Москва, ул Павелецкая, 4к2 кв 37');
cart.setDelivery(toStore);
cart.checkout();
