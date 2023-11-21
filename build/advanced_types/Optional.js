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
    const passType = user.password?.type;
}
//# sourceMappingURL=Optional.js.map