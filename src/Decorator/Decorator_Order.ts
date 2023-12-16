//Универсальный параметр
function Uni(name: string): any {
  console.log(`Инициализация параметра: ${name}`)
  return function () {
    console.log(`Вызоы: ${name}`)
  }
}

@Uni('Класс')   // 7
class MyClass {
  @Uni('Свойство') // 1
  props?: any

  @Uni('Свойство static')  // 4
  static props2?: any

  @Uni('Метод static') // 5
  static method2(@Uni('Параметр метода static')_: any){} // 6

  @Uni('Метод')  // 2
  method(@Uni('Параметр метода')_: any){}  // 3

  constructor(@Uni('Параметр конструктора')_: any) { // 8
  }
}

// при смене позици параметров очередь вызова не меняется
//log:
// Инициализация параметра: Свойство
// Вызоы: Свойство
// Инициализация параметра: Метод
// Инициализация параметра: Параметр метода
// Вызоы: Параметр метода
// Вызоы: Метод
// Инициализация параметра: Свойство static
// Вызоы: Свойство static
// Инициализация параметра: Метод static
// Инициализация параметра: Параметр метода static
// Вызоы: Параметр метода static
// Вызоы: Метод static
// Инициализация параметра: Класс
// Инициализация параметра: Параметр конструктора
// Вызоы: Параметр конструктора
// Вызоы: Класс

