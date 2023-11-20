enum PaymentStatus {
  Holed,
  Processed,
  Reversed
}

class PaymentClass {
  id: number;
  status: PaymentStatus;
  createAt: Date;
  updateAt: Date;

  constructor(id: number) {
    this.id = id;
    this.createAt = new Date();
    this.status = PaymentStatus.Holed;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createAt.getTime();
  }

  unHoldPayment(){
    if(this.status == PaymentStatus.Processed){
      throw  new Error('Платеж не может быть возвращен!')
    }
    this.status = PaymentStatus.Reversed;
    this.updateAt = new Date();
  }
}

const paymentClass = new PaymentClass(1);
paymentClass.unHoldPayment();
console.log(paymentClass);
const timePaymentClass = paymentClass.getPaymentLifeTime(); // Через точку можем обращаться к методам (метод это функция)
console.log(timePaymentClass)
