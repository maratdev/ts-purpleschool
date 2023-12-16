//keyof— это ключевое слово в TypeScript, которое используется для извлечения типа ключа из типа объекта.
//Оператор keyof принимает тип объекта и создает строковое или числовое объединение его ключей.

type Staff = {
  name: string;
  salary: number;
}
type staffKeys = keyof Staff; // "name" | "salary"

//Предположим, у вас есть тип или объект и вы хотите получить доступ к его ключам. В этом случае вы можете использовать keyof.

interface IUserKey {
  name: string;
  age: number;
}

let userKey: IUserKey = {
  name: 'John',
  age: 30,
};

type UserKeys = keyof IUserKey; // синоним для 'name' | 'age'

// Доступ к ключу с помощью квадратных скобок
let nameKey = userKey.name; // эквивалентно 'user.name'
console.log(nameKey); // Выведет 'John'


