"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holed"] = 0] = "Holed";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class PaymentClass {
    id;
    status;
    createAt;
    updateAt;
    constructor(id) {
        this.id = id;
        this.createAt = new Date();
        this.status = PaymentStatus.Holed;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createAt.getTime();
    }
    unHoldPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Платеж не может быть возвращен!');
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date();
    }
}
const paymentClass = new PaymentClass(1);
paymentClass.unHoldPayment();
console.log(paymentClass);
const timePaymentClass = paymentClass.getPaymentLifeTime(); // Через точку можем обращаться к методам (метод это функция)
console.log(timePaymentClass);
//# sourceMappingURL=Methods_Class.js.map