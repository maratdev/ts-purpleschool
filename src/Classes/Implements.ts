interface ILogger {
  log(...args:any[]): void;

  error(...args: any[]): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args)
  }

  async error(...args: any[]): Promise<void> {
    //кинуть во внешнюю систему
    console.log(...args)
  }


}

interface IPayable {
  pay(paymentId: number): void;

  price?: number;
}

interface IPayableDelete {
  delete(): void
}

class UserLog implements IPayable, IPayableDelete {
  pay(paymentId: number | string): void { // можно расширять типы но не сужать!!
    console.log(paymentId)
  }

  delete(): void {
    console.log()
  }

}
