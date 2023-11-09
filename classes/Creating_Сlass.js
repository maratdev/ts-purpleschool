"use strict";
class UserClass {
    constructor(name) {
        this.name = name;
    }
}
const userClass1 = new UserClass('Alex');
console.log(userClass1);
userClass1.name = 'Bob';
class AdminClass {
}
