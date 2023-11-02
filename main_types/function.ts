//--------------Обязательный параметр
function getGreeting(name: string) {
  return `Hello, ${name.toUpperCase()}!`;
}
getGreeting('Mike'); // Hello, MIKE!

//---------Необязательный параметр
function getGreetingOptional(name?: string) {
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
getGreetingOptional(); // Hello, Guest!

//------------Необязательный параметр может быть undefined, но не null.
function getGreetingNull(name?: string | null) { //Здесь мы расширили определение типа переменной name до string | undefined | null.
  return `Hello, ${name ? name.toUpperCase() : 'Guest'}!`;
}
getGreetingNull('Mike'); // Hello, MIKE!


// ----------------Тип возвращаемого значения

function getReturnType(name: string): string { //его можно указывать явно
  return `Hello, ${name.toUpperCase()}!`;
}
getReturnType('Mike'); // Hello, MIKE!


//-----------------------Анонимные функции
const fruits = ['banana', 'mango', 'apple'];
const toUpper = (name: string): string => name.toUpperCase();
const upperFruits = fruits.map(toUpper); // ['BANANA', 'MANGO', 'APPLE']
