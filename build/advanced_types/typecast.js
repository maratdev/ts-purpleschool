"use strict";
const userCoast = {
    username: 'ALex',
    password: 'yyy',
    userEmail: 'alex@mail.ru'
};
// скопируем все поля
const adminCoast = {
    ...userCoast,
    role: 1
};
// возьмем нужные поля
function userToAdmin(user) {
    return {
        username: user.username,
        role: 1
    };
}
//# sourceMappingURL=typecast.js.map