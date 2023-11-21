type PaymentStatusExtend = 'new' | 'paid';

class PaymentExtend {
  id: number;
  status: PaymentStatusExtend = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistedPayment extends PaymentExtend {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id); // обращение к конструктору или переопределение его из класса PaymentExtend
  }

  saveToDB() {

  }

  override pay(date?: Date) { // когда нужно унаследовать от без параметоров от класса PaymentExtend метода pay() подойдет optional
    super.pay();
    this.status = 'paid';
    if (date) {
      this.paidAt = date;
    }
  }
}

//--------------------Порядок вызова конструктора
class UserExtend {
  name: string = 'user'; //1 вызов

  constructor() {
    console.log(this.name) //2 вызов
  }
}

class AdminExtend extends UserExtend {
  name: string = 'admin'; //3 вызов

  constructor() { //4 вызов
    super(); // должен вызываться первым перед любыми действиями
    console.log(this.name);
  }
}

new AdminExtend(); // вывод user admin

//---------Наследование от вcтроенных класов

class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}

//--------------------- Композиция

class UserListExtend {
  users: UserExtend[];

  push(u: UserExtend) {
    this.users.push(u)
  }
}

class PaymentsExtend {
  name: string;
}

class UserWithPaymentExtend {
  user: UserExtend;
  payment: PaymentsExtend;

  constructor(user: UserExtend, payment: PaymentsExtend) {
    this.payment = payment;
    this.user = user;
  }
}

















