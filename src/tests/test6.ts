//Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение


abstract class LoggerAbstract {
  protected dateFormatter = () => new Date().toLocaleString();

  abstract log (message: string): void

  printDate(): void {
    this.log(this.dateFormatter())
  }
}

class RealTimeLogger extends LoggerAbstract {

  log(message: string): void {
    console.log(message)
  }

  logWithDate(msg: string): void {
    this.printDate()
    this.log(msg)
  }
}

const logger = new RealTimeLogger()
logger.logWithDate('Test message')




