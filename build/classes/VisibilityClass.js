"use strict";
// Статические методы и свойства
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f"); //обратились к Vehicle к его приватному статусу #price
    }
    addDamage(damages) {
        this.damages.push(damages);
    }
}
_Vehicle_price = new WeakMap();
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
//# sourceMappingURL=VisibilityClass.js.map