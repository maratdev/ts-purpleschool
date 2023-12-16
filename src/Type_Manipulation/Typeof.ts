//Тип typeof в TypeScript используется для определения типа данных или типа значения.
// Это позволяет TypeScript проверять типы и обеспечивать безопасность типов во время компиляции.


function doSomething(x: number | string) {
  if (typeof x === 'string') {
    // Внутри блока TypeScript знает, что `x` должно быть строкой
   // console.log(x.subtr(1)); // Ошибка, 'subtr' не существует для `string`
    console.log(x.substr(1)); // OK
  }
 // x.substr(1); // Ошибка: Нет гарантии, что `x` является `строкой`
}

let strOrNum: string | number;

let str2OrNum: typeof strOrNum; // присвой тип из strOrNum в str2OrNum

const userType = {
  name: 'Alex'
}

type keyOfUser = keyof typeof userType; // что бы получить имя ключей нужно преобразовать в тип

enum DirectType {
  Up,
  Down
}

type dType = keyof typeof DirectType; // получим именно название свойтв DirectType

