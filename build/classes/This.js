"use strict";
class PaymentThis {
    date = new Date();
    getDate() {
        return this.date;
    }
    getDateArrow = () => {
        return this.date;
    };
}
const p = new PaymentThis();
const userThis = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow() //стрелочная функция сохраняет констекст по умолчанию
};
console.log(p.getDate());
console.log(userThis.paymentDate());
console.log(userThis.paymentDateArrow);
class PaymentPersistentThis extends PaymentThis {
    save() {
        return super.getDate(); // берет getDate из PaymentThis
        // return super.getDateArrow() // будет ошибка не можем получить стрелочную функцию
        // return this.getDateArrow() // ошибка проподет
    }
}
console.log(new PaymentPersistentThis().save());
//# sourceMappingURL=This.js.map