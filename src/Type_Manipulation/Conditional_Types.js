"use strict";
const a1 = Math.random() > 0.5 ? 1 : 0;
const conditionalSuc = {
    code: 200,
    data: 'done'
};
const conditionalErr = {
    code: 200,
    data: new Error()
};
class UserConditional {
    id;
    name;
}
class UserPerConditional extends UserConditional {
    dbId;
}
function getUserConditional(dbIdOrId) {
    if (typeof dbIdOrId === 'number') {
        return new UserConditional();
    }
    else {
        return new UserPerConditional();
    }
}
function getUserConditional2(id) {
    if (typeof id === 'number') {
        return new UserConditional(); // явное присвоение типа
    }
    else {
        return new UserPerConditional();
    }
}
getUserConditional2(2);
getUserConditional2('alex');
