"use strict";
//абстрактный класс — все же класс, главное его отличие от обычного класса заключается в отсутствии возможности создания его экземпляров.
//Когда нам нужно определить общее поведение для нескольких классов, удобно использовать абстрактные классы
class Controller {
}
//! new Controller - Error
class SuperAbstractClass {
}
// в абстрактных потомках допускается не переопределять абстрактные члены предков
class SubAbstractClass extends SuperAbstractClass {
}
class SubConcreteClass extends SubAbstractClass {
}
// ... если они не были переопределены в классах-предках
class SubSubConcreteClass extends SubConcreteClass {
}
//Как правило, абстрактные классы реализуют только ту логику, которая не будет ни при каких обстоятельствах противоречить логике своих подклассов.
class AbstractSuperClass1 {
    constructor() {
        this.name = 'AbstractSuperClass';
    }
    toString() {
        // реализация общего неабстрактного метода
        return `[object ${this.name}]`;
    }
}
class FirstConcreteSubClass extends AbstractSuperClass1 {
    constructor() {
        super(...arguments);
        this.name = 'T2'; // реализуем абстрактное поле
    }
}
class SecondConcreteSubClass extends AbstractSuperClass1 {
    constructor() {
        super(...arguments);
        this.name = 'T2'; // реализуем абстрактное поле
    }
}
let first = new FirstConcreteSubClass();
let second = new SecondConcreteSubClass();
first.toString(); // [object FirstConcreteSubClass] реализация в абстрактном предке
second.toString(); // [object SecondConcreteSubClass] реализация в абстрактном предке
//# sourceMappingURL=Abstract_Classes.js.map