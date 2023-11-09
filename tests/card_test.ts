type deliveryOption = 'home' | 'pick-point'
type DeliveryOptions = DeliveryHome | DeliveryPickup;

class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Delivery {
  type: deliveryOption;
  date: string;

  constructor(type: deliveryOption, date: string) {
    this.type = type
    this.date = date;
  }
}

class DeliveryHome extends Delivery {

  address: string;

  constructor(type: deliveryOption, date: string, address: string) {
    super(type, date)
    this.address = address;

  }

  setDelivery(type: deliveryOption, date: string, address: string): void {
    this.type = type;
    this.date = date;
    this.address = address;
  }
}

class DeliveryPickup extends Delivery {
  storeId: number;

  constructor(type: deliveryOption, date: string, storeId: number) {
    super(type, date);
    this.storeId = storeId;
  }

  setDelivery(type: deliveryOption, date: string, storeId: number): void {
    this.type = type;
    this.date = date;
    this.storeId = storeId;
  }

}

interface ICart {
  products: Product[];
  deliveryHome: DeliveryHome;
  deliveryPickup: DeliveryPickup;
}

class Cart implements ICart {
  deliveryHome: DeliveryHome;
  deliveryPickup: DeliveryPickup;
  products: Product[];
  private delivery: DeliveryOptions;

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    if (this.products.find((p) => p.id === product.id)) {
      return;
    }
    if (Array.isArray(product)) {
      if (!product.every(item => item)) {
        throw new Error('Переданн не верный массив объектов с типом Product');
      } else {
        this.products = [...this.products, ...product];

        return product;
      }
    }

    this.products.push(product);
  }

  removeProductById(id: number): void {
    const index = this.products.findIndex(
      (product) => product.id === id
    );

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getProductList(): Product[] {
    return this.products;
  }

  calculateTotalCost(): number {
    let totalCost: number = 0;

    for (const product of this.products) {
      totalCost += product.price;
    }

    return totalCost;
  }


  checkout() {
    console.log('Thank you for your order!');
    console.log(`Products: ${this.products.map(function (num) {
        return num.name;
      })}`
    );

    if (this.delivery instanceof DeliveryPickup) {
      console.log(`Тип доставки: ${this.delivery.type} Дата: ${this.delivery.date} IdPickup: ${this.delivery.storeId}`)
    }

    if (this.delivery instanceof DeliveryHome) {
      console.log(`Тип доставки: ${this.delivery.type} Дата: ${this.delivery.date} Домашний адрес: ${this.delivery.address}`)
    }

  }

  setDelivery(delivery: DeliveryHome): void;
  setDelivery(delivery: DeliveryPickup): void;
  setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

}

let today = new Date();
let orderDate = today.toLocaleString();

const cart = new Cart();

const milk = new Product(1, 'Молоко', 800);
cart.addProduct(milk)

const toStore = new DeliveryPickup('pick-point', orderDate, 777);
const toHome = new DeliveryHome('home', orderDate, 'г Москва, ул Павелецкая, 4к2 кв 37');
cart.setDelivery(toStore);

cart.checkout()
