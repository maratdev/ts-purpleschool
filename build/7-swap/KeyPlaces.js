"use strict";
function swapPropValues(obj, keyType) {
    const res = {};
    for (const key in obj) {
        if (typeof key === keyType) {
            const value = obj[key];
            res[value] = key;
            delete obj[key];
        }
    }
    return { ...res, ...obj };
}
const obj = { a: 1, b: 2, c: 5 };
const resultSwap = swapPropValues(obj, 'number');
console.log(resultSwap);
//# sourceMappingURL=KeyPlaces.js.map