class UserAllow {
  @allowFunc((a: number) => a > 0)
  age: number = 30;
}



const person = new UserAllow();
console.log(person.age);

person.age = 0;
console.log(person.age);

person.age = 20;
console.log(person.age);

function allowFunc(check: (value: any) => boolean) {
  return (target: any, propertyKey: string) => {
    let value = target[propertyKey];

    const setter = (newVal: any) => {
      if (check(newVal)) {
        value = newVal;
      } else {
        console.log('Error');
      }
    };

    const getter = () => value;

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
