// Интерфейс — это конструкция языка TypeScript, которая используется, чтобы описывать объекты и функции.
//*Interface используется для определения структуры объекта, состоящего из свойств и методов. Он может быть реализован как класс или интерфейс в JavaScript.
//*Type используется для определения типа данных, таких как строка, число, булево значение и т.д. Он не имеет реализации в JavaScript и используется только для проверки типов во время компиляции TypeScript.



// Создаем интерфейс без =
interface IUsers {
  name: string,
  age: number,
  skills: string[],

  log: (id: number) => string // можно и функуию (нежелательно!)
}

interface IRole {
  roleId: number
}

// Насследуем от IUsers и IRole
interface IUsersAllRole extends IUsers, IRole {
  createAd: Date | number
}

//В данном фрагменте мы создали интерфейс и реализовали на его основе объект oneUser.
let oneUser: IUsersAllRole = {
  createAd: new Date(),
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 1,
  log(id){
    return 'rr'
  }
}
//Может случиться так, что мы не знаем заранее всех свойств, которые будут содержаться в нашем интерфейсе.
//Это позволило нам не указывать множество свойств с именами, но лишь один раз указать тип ключа и тип его значения.
interface IUserDic {
  [index:string]: IRole;
}

const myNotePad: IUserDic = {
 id: {roleId: 5},
 name: {roleId:50},

}
