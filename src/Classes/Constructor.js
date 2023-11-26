"use strict";
class UserClassConstr {
    name;
    age;
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const userClass2 = new UserClassConstr('Alex');
const userClass3 = new UserClassConstr();
const userClass4 = new UserClassConstr(33);
const userClass5 = new UserClassConstr('Alex', 33);
