"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    constructor(id) { }
    create() {
        UserService.db;
    }
}
(() => {
    UserService.db = 'dd';
})();
UserService.db; // мы можем на прямую обращаться к методу как к объекту без new UserService
UserService.getUser(1);
const inst = new UserService(1);
inst.create();
