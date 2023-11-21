"use strict";
class UserClass {
    name;
    constructor(name) {
        this.name = name;
    }
}
const userClass1 = new UserClass('Alex');
console.log(userClass1);
userClass1.name = 'Bob';
class AdminClass {
    role; //? отключено  strictPropertyInitialization: false или !- оператор утверждения определённого присваивания
}
//# sourceMappingURL=Creating_%D0%A1lass.js.map