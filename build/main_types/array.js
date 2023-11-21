"use strict";
//Определение массива
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const skillRes = skills.filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(skillRes);
//Определение массива
const fruit = ['banana', 'mango', 'apple'];
function toUpperArray(items) {
    return items.map((s) => s.toUpperCase());
}
toUpperArray(fruit);
//# sourceMappingURL=array.js.map