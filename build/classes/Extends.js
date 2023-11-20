"use strict";
class PaymentExtend {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends PaymentExtend {
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
    constructor() {
        this.name = 'user'; //1 вызов
        console.log(this.name); //2 вызов
    }
}
class AdminExtend extends UserExtend {
    constructor() {
        super(); // должен вызываться первым перед любыми действиями
        this.name = 'admin'; //3 вызов
        console.log(this.name);
    }
}
new AdminExtend(); // вывод user admin
//---------Наследование от вcтроенных класов
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
//--------------------- Композиция
class UserListExtend {
    push(u) {
        this.users.push(u);
    }
}
class PaymentsExtend {
}
class UserWithPaymentExtend {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
//# sourceMappingURL=Extends.js.map