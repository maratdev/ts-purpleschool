"use strict";
const UserObj = {
    name: 'Vasiliy',
    age: 9,
    skills: ['typescripts', 'javascript'],
};
function getDataObj(obj, keys) {
    const result = {};
    keys.forEach((key) => {
        result[key] = obj[key];
    });
    return result;
}
const resLogObj = getDataObj(UserObj, ['skills', 'age']);
console.log(resLogObj);
