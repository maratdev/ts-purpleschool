"use strict";
// Можной не использовать email
const userForm = {
    login: 'a@a.ru',
    password: '1234'
};
//---------Необязательный параметр
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
function testPass(user) {
    var _a;
    const passType = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
