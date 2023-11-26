"use strict";
//Тип typeof в TypeScript используется для определения типа данных или типа значения.
// Это позволяет TypeScript проверять типы и обеспечивать безопасность типов во время компиляции.
function doSomething(x) {
    if (typeof x === 'string') {
        // Внутри блока TypeScript знает, что `x` должно быть строкой
        // console.log(x.subtr(1)); // Ошибка, 'subtr' не существует для `string`
        console.log(x.substr(1)); // OK
    }
    // x.substr(1); // Ошибка: Нет гарантии, что `x` является `строкой`
}
let strOrNum;
let str2OrNum; // присвой тип из strOrNum в str2OrNum
const userType = {
    name: 'Alex'
};
var DirectType;
(function (DirectType) {
    DirectType[DirectType["Up"] = 0] = "Up";
    DirectType[DirectType["Down"] = 1] = "Down";
})(DirectType || (DirectType = {}));
