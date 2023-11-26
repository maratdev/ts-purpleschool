"use strict";
//Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
class LoggerAbstract {
    dateFormatter = () => new Date().toLocaleString();
    printDate() {
        this.log(this.dateFormatter());
    }
}
class RealTimeLogger extends LoggerAbstract {
    log(message) {
        console.log(message);
    }
    logWithDate(msg) {
        this.printDate();
        this.log(msg);
    }
}
const logger = new RealTimeLogger();
logger.logWithDate('Test message');
