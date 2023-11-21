"use strict";
class PaymentExtend {
    id;
    status = 'new';
    constructor(id) {
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends PaymentExtend {
    databaseId;
    paidAt;
    constructor() {
        const id = Math.random();
        super(id); // обращение к конструктору или переопределение его из класса PaymentExtend
    }
    saveToDB() {
    }
    pay(date) {
        super.pay();
        this.status = 'paid';
        if (date) {
            this.paidAt = date;
        }
    }
}
//--------------------Порядок вызова конструктора
class UserExtend {
    name = 'user'; //1 вызов
    constructor() {
        console.log(this.name); //2 вызов
    }
}
class AdminExtend extends UserExtend {
    name = 'admin'; //3 вызов
    constructor() {
        super(); // должен вызываться первым перед любыми действиями
        console.log(this.name);
    }
}
new AdminExtend(); // вывод user admin
//---------Наследование от вcтроенных класов
class HttpError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code ?? 500;
    }
}
//--------------------- Композиция
class UserListExtend {
    users;
    push(u) {
        this.users.push(u);
    }
}
class PaymentsExtend {
    name;
}
class UserWithPaymentExtend {
    user;
    payment;
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
//# sourceMappingURL=Extends.js.map