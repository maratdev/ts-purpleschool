class ReturnTypeUser {
  constructor(public id: number, public name: string) {}
}

function getData(id: number): ReturnTypeUser {
  return new ReturnTypeUser(id, 'Alex')
}

// Тип ReturnType в TypeScript используется для определения возвращаемого типа функции или метода.
// Это полезно, когда вы хотите узнать, какой тип данных возвращает функция, не видя ее определения.

type RT = ReturnType<typeof getData> // Получить тип возвращаемого значения типа функции

type PT = Parameters<typeof getData> // Получить параметры типа функции
type first = PT[0] // получаем первый нулевой параметр

type CP = ConstructorParameters<typeof ReturnTypeUser> //Получить параметры типа функции-конструктора в кортеже
