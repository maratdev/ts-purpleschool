//Декоратор доступа объявляется непосредственно перед объявлением средства доступа.
// Декоратор средства доступа применяется к дескриптору свойства средства доступа и может использоваться для наблюдения, изменения или замены определений средства доступа.

//https://runebook.dev/ru/docs/typescript/decorators

class Point {
  private readonly _x: number;
  private readonly _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}
