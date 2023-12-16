//Тип Partial в TypeScript используется для указания того, что свойство или параметр класса может иметь неполное или частичное определение.
// Это означает, что некоторые свойства могут быть не заданы или иметь значения по умолчанию.

interface IPartialUser {
  name: string;
  age?: string;
  email: string;
}

type partial = Partial<IPartialUser> // все свойства в IPartialUser не обязательны
const part: partial = {} // будет валидным

//Тип Required в TypeScript используется для обозначения того,
// что поле или параметр класса является обязательным и должно быть задано при создании объекта.

type required = Required<IPartialUser> // все свойства в IPartialUser обязательны

//Тип Readonly в TypeScript используется для создания read-only (доступных только для чтения) полей или свойств в классе.
type readonly = Readonly<IPartialUser> 
