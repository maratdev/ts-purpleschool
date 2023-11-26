"use strict";
//Infer в Typescript используется для определения типа данных, который может быть выведен из контекста или аргумента функции.
// Это позволяет определять типы переменных и параметров на основе фактических значений, передаваемых в функцию или используемых в контексте.
function runTransaction(transaction) {
    console.log(transaction);
}
const transaction = {
    fromTo: ['1', '2']
};
runTransaction(transaction);
