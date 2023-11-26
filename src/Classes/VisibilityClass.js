"use strict";
// Статические методы и свойства
class Vehicle {
    make;
    damages; // Доступно только внутри класса
    _model;
    run;
    #price;
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        return this.#price === v.#price; //обратились к Vehicle к его приватному статусу #price
    }
    addDamage(damages) {
        this.damages.push(damages);
    }
}
new Vehicle().make = 'd';
// new Vehicle().damages= 'dd' ; // Error
class EuroTruck extends Vehicle {
    setRun(km) {
        this.run = km / 1.609; //можем получить доступ к protected run
        return this.run;
        // this.damages - error
    }
}
const trucks = new EuroTruck().setRun(50);
console.log(trucks);
