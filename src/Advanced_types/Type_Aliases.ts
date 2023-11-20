//Псевдонимы типов (Type Aliases)

//здесь много дублирования
function doSomethingOne(user: { firstName: string, lastName: number }) {}
function doSomethingTwo(user: { firstName: string, lastName: number }) {}
function doSomethingAnother(user: { firstName: string, lastName: number }) {}

type User = {
  firstName: string;
  pointsCount: number;
}

type Role = {
  id: number;
}

// Объединение объектов в один
type UserRole = User & Roles; //? & - объединение

// Объединение объектов в один декомпозиция (более предпочтительнее) что бы небыло конфликтов полей
type UserWithRole = {
  user: User;
  role: Role;
}

function doSomethingAliases(user: User) {
  return user
}

const userAliases = {
  firstName: 'Mike',
  pointsCount: 1000,
};

// Оба вызова работают
doSomethingAliases(userAliases);
doSomethingAliases({ firstName: 'Bob', pointsCount: 1800 });
