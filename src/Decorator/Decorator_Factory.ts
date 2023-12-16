//фабрики декораторов. Фабрика декораторов это функция которая возвращает вызываюмую декоратором во время выполнения функцию.

function format(pattern: string) {
  // это фабрика декораторов и она возвращает функцию-декоратора
  return function (target) {
    // это декоратор. Здесь будет код,
    // который что то делает с target и pattern
  };
}

function firstD() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function secondD() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @firstD()
  @secondD()
  method() {}
}
