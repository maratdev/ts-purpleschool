"use strict";
//Тип Union в TypeScript позволяет объединить несколько типов в один.
// Это полезно для описания значений, которые могут принадлежать к разным типам, но имеют общие свойства или поведение.
function logId(id) {
    if (typeof id === 'string') { // сужение типов
        console.log(id + '1');
    }
    else if (typeof id === 'number') {
        console.log(id + 1);
    }
    else {
        console.log(id);
    }
}
//----------------------Массивы
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.error(err);
    }
}
//---------------------- Объекты
//Чтобы принять такой объект в функцию как параметр, нужно указать его структуру в описании функции:
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
logObj({ a: 1, b: 2000 });
function doSomething(user) {
    if ('firstName' in user) {
        console.log(user.firstName);
    }
    if ('pointsCount' in user) {
        console.log(user.pointsCount + 500);
    }
}
doSomething({ firstName: 'Alice', pointsCount: 2000 });
// Так нельзя
//! doSomething({ firstName: 'Bob' });
// И так тоже
//! doSomething({ firstName: 'Bob', pointsCount: 1800, key: 'another' });
function logMultipleIds(a, b) {
    if (typeof a === typeof b) { //сравниваем типы.
        console.log(a.toString);
    }
    else {
        console.log(a);
    }
}
logMultipleIds(10, true);
