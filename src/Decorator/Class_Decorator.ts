//Декораторы в Typescript позволяют добавлять дополнительное поведение или изменять существующее поведение класса, метода, свойства или параметров без необходимости изменения исходного кода.

interface IUserService {
  user: number

  getUsersInDb(): number
}

@threeUserAdvanced
@setUsersDecor(2)
@nullUserNew
class UserServiceDecorNew implements IUserService {
  user: number = 1000;

  getUsersInDb(): number {
    return this.user
  }
}

function nullUserNew(target: Function) {
  target.prototype.user = 0
}

function setUsersDecor(users: number) {
  return (target: Function)=> {
    target.prototype.users = users;
  }
}


function threeUserAdvanced<T extends new(...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    users = 3
  }
}
