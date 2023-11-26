"use strict";
class ReturnTypeUser {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getData(id) {
    return new ReturnTypeUser(id, 'Alex');
}
