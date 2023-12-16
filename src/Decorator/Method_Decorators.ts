//Декоратор метода объявляется непосредственно перед объявлением метода.
// Декоратор применяется к дескриптору свойства метода и может использоваться для наблюдения, изменения или замены определения метода.

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

//Мы можем определить декоратор @enumerable , используя следующее объявление функции:
function enumerable(value: boolean) {
  return function (
    target: any, // target
    propertyKey: string, // propertyKey
    descriptor: PropertyDescriptor // PropertyDescriptor
  ) {
      descriptor.enumerable = value;
  };
}
