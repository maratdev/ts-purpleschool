"use strict";
function sortObjectsById(objects, sortOrder = "asc") {
    return objects.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.id - b.id;
        }
        else {
            return b.id - a.id;
        }
    });
}
const test9Data = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Alisa' },
];
const resData = sortObjectsById(test9Data);
console.log(resData);
//# sourceMappingURL=test_9.js.map