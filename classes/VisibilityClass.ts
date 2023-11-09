// Статические методы и свойства

class Vehicle {
  public make: string;
  private damages: string[]; // Доступно только внутри класса
  private _model: string;
  protected run: number
  #price: number

  set model(m: string) {
    this._model = m;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle){
    return this.#price === v.#price; //обратились к Vehicle к его приватному статусу #price
  }

  addDamage(damages: string) {
    this.damages.push(damages)
  }
}

new Vehicle().make = 'd'

// new Vehicle().damages= 'dd' ; // Error

class EuroTruck extends Vehicle {
  setRun(km: number) {
    this.run = km / 1.609  //можем получить доступ к protected run
    return this.run;
    // this.damages - error
  }
}

const trucks = new EuroTruck().setRun(50);
console.log(trucks);
