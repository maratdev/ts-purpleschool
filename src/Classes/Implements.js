"use strict";
class Logger {
    log(...args) {
        console.log(...args);
    }
    async error(...args) {
        //кинуть во внешнюю систему
        console.log(...args);
    }
}
class UserLog {
    pay(paymentId) {
        console.log(paymentId);
    }
    delete() {
        console.log();
    }
}
