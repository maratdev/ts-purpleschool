interface IUserService {
  user: number
  getUsersInDb(): number
}

class UserServiceDecor implements IUserService {
  user: number = 1000;

  getUsersInDb(): number {
    return this.user
  }
}

function nullUser(obj: IUserService){
  obj.user = 0
  return obj
}

function logUsers(obj: IUserService){
  console.log('User: ' + obj.user)
  return obj
}


console.log(new UserServiceDecor().getUsersInDb())
console.log(nullUser(new UserServiceDecor()).getUsersInDb()) // nullUser декоратор
console.log(logUsers(nullUser(new UserServiceDecor())).getUsersInDb()) // logUsers декоратор
