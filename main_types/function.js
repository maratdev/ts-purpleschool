"use strict";
//--------------Обязательный параметр
function getGreeting(name) {
    return `Hello, ${name.toUpperCase()}!`;
}
getGreeting('Mike'); // Hello, MIKE!
//---------Необязательный параметр
function getGreetingOptional(name) {
    return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
getGreetingOptional(); // Hello, Guest!
//------------Необязательный параметр может быть undefined, но не null.
function getGreetingNull(name) {
    return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
getGreetingNull('Mike'); // Hello, MIKE!
// ----------------Тип возвращаемого значения
function getReturnType(name) {
    return `Hello, ${name.toUpperCase()}!`;
}
getReturnType('Mike'); // Hello, MIKE!
//-----------------------Анонимные функции
const fruits = ['banana', 'mango', 'apple'];
const toUpper = (name) => name.toUpperCase();
const upperFruits = fruits.map(toUpper); // ['BANANA', 'MANGO', 'APPLE']
