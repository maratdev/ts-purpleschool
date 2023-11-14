"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder; // возвращает что this явялется ли AdminBuilder
    }
}
class AdminBuilder extends UserBuilder {
}
const resBuilder = new UserBuilder().setName('Вася');
const resBuilderAdmin = new AdminBuilder().setName('Вася');
let userBuilder = new UserBuilder();
if (userBuilder.isAdmin()) {
    console.log(userBuilder);
}
else {
    console.log(userBuilder);
}
