import 'reflect-metadata'


const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')

function LogMeta() {
  return (
    target: object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey))
    console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey))
    console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey))
    let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    existParams.push(parameterIndex)
    Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey)
  }
}

function ValidateMeta() {
  return (
    target: object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
      let method = descriptor.value;
      descriptor.value = function (...args: any){
        let positivParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        if (positivParams){
          for (let index of positivParams){
            if (args[index] < 0 ){
              throw new Error('Число должно быть больше 0')
            }
          }
        }
        return method?.apply(this, args)
      }
  }

}


class ExampleClassMeta {
  private _users: number

  @ValidateMeta()
  exampleMethodParam(@LogMeta() arg: number) {
    return this._users = arg;
  }
}

const exampleInstance = new ExampleClassMeta();
console.log(exampleInstance.exampleMethodParam(10))
console.log(exampleInstance.exampleMethodParam(-10))

//В этом примере декоратор “log” добавляет дополнительный код, который выводит сообщение в консоль при вызове метода “exampleMethod”.
// Этот код использует отражение для изменения исходного метода, не изменяя его исходный код.
