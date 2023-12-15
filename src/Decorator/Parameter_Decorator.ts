//Декоратор параметра - это функция, которая принимает функцию в качестве аргумента и возвращает декорированную функцию.
// В TypeScript это реализуется с помощью аннотации типов.

function LogParam() {
  return (
    target: object,
    propertyKey: string,
    parameterIndex: number
  )=> {
    console.log(target)
    console.log(propertyKey)
    console.log(parameterIndex)
  }
}


class ExampleClassParam {
  private _users: string
  exampleMethodParam(@LogParam() arg: string) {
    this._users = arg;
  }
}

const exampleInstance = new ExampleClassParam();
console.log(exampleInstance)

//В этом примере декоратор “log” добавляет дополнительный код, который выводит сообщение в консоль при вызове метода “exampleMethod”.
// Этот код использует отражение для изменения исходного метода, не изменяя его исходный код.
