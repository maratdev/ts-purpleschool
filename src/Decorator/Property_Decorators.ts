//Декоратор свойства объявляется непосредственно перед объявлением свойства

interface IUUserService {
  users: number
  getUsersInDataBase(): number
}

function Max(max: number) {
  return (
    target: Object,
    propertyKey: string | symbol
  )=> {
    let value: number
    const setter = function (newValue: number){
      if(newValue > max){
        console.log(`Нельзя установить значение больше ${max}`)
      }else {
        value = newValue
      }
    }
    const getter = function (){
        return value;
    }
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}

class UserServiceProperty implements IUUserService {
  @Max(100)
  users: number = 1000
  getUsersInDataBase(): number {
    throw new Error('Ошибка!')
  }
}

const UserServiceProperty2 = new UserServiceProperty();
UserServiceProperty2.users = 1
console.log(UserServiceProperty2.users)

