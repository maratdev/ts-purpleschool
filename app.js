"use strict";
// ------------------------------------- Переменные ------------------------------- //
let revenue = 1000;
let bonus = 500;
let c = 'sdf';
let d = true;
let res = revenue + bonus;
console.log(res);
// ------------------------------------- Функции------------------------------- //
function getFullName(firstName, surName) {
    return `${firstName} ${surName}`;
}
// ------------------------------------- Стрелочные функции------------------------------- //
const getFullNameArrow = (firstName, surName) => {
    return `${firstName} ${surName}`;
};
// ------------------------------------- Объекты ------------------------------- //
function getFullNameObj(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
const user = {
    firstname: 'Иван',
    surname: 'Иванов',
    city: 'Москва',
    age: 33,
    skills: {
        dev: true,
        devops: true,
    }
};
console.log(getFullNameObj(user));
