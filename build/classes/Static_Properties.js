"use strict";
class UserService {
    static db; // мы можем указать ключевое слово static, и он станет доступен через имя класса
    static getUser(id) {
        return UserService.db.findById(id);
    }
    constructor(id) { }
    create() {
        UserService.db;
    }
    static {
        UserService.db = 'dd';
    }
}
UserService.db; // мы можем на прямую обращаться к методу как к объекту без new UserService
UserService.getUser(1);
const inst = new UserService(1);
inst.create();
//# sourceMappingURL=Static_Properties.js.map