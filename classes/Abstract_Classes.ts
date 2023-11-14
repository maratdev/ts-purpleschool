//абстрактный класс — все же класс, главное его отличие от обычного класса заключается в отсутствии возможности создания его экземпляров.
//Когда нам нужно определить общее поведение для нескольких классов, удобно использовать абстрактные классы

abstract class Controller {
  abstract handle(req: any): void
}
//! new Controller - Error

abstract class SuperAbstractClass {
  public abstract field: string; // объявление абстрактного поля
}

// в абстрактных потомках допускается не переопределять абстрактные члены предков
abstract class SubAbstractClass extends SuperAbstractClass {}

class SubConcreteClass extends SubAbstractClass {
  // конкретный подкласс обязан переопределять абстрактные члены, если они...
  public field: string;
}

// ... если они не были переопределены в классах-предках
class SubSubConcreteClass extends SubConcreteClass {}


//Как правило, абстрактные классы реализуют только ту логику, которая не будет ни при каких обстоятельствах противоречить логике своих подклассов.

abstract class AbstractSuperClass1 {
  name: string = 'AbstractSuperClass';

  public toString(): string {
    // реализация общего неабстрактного метода
    return `[object ${this.name}]`;
  }
}

class FirstConcreteSubClass extends AbstractSuperClass1 {
  public name: string = 'T2'; // реализуем абстрактное поле
}

class SecondConcreteSubClass extends AbstractSuperClass1 {
  public name: string = 'T2'; // реализуем абстрактное поле
}

let first: FirstConcreteSubClass = new FirstConcreteSubClass();
let second: SecondConcreteSubClass = new SecondConcreteSubClass();

first.toString(); // [object FirstConcreteSubClass] реализация в абстрактном предке
second.toString(); // [object SecondConcreteSubClass] реализация в абстрактном предке

