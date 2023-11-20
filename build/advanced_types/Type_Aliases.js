"use strict";
//Псевдонимы типов (Type Aliases)
//здесь много дублирования
function doSomethingOne(user) { }
function doSomethingTwo(user) { }
function doSomethingAnother(user) { }
function doSomethingAliases(user) {
    return user;
}
const userAliases = {
    firstName: 'Mike',
    pointsCount: 1000,
};
// Оба вызова работают
doSomethingAliases(userAliases);
doSomethingAliases({ firstName: 'Bob', pointsCount: 1800 });
//# sourceMappingURL=Type_Aliases.js.map