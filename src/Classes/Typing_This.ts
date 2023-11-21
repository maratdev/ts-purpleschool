class UserBuilder {

  name: string;

  setName(name: string): this { // возвращает this
    this.name = name;
    return this;
  }
  isAdmin(): this is AdminBuilder { // type guard - проверяте является ли AdminBuilder
    return this instanceof AdminBuilder; // возвращает что this явялется ли AdminBuilder
}
}

class AdminBuilder extends UserBuilder {
  roles: string[]
}

const resBuilder = new UserBuilder().setName('Вася')
const resBuilderAdmin = new AdminBuilder().setName('Вася')

let userBuilder : UserBuilder | AdminBuilder = new UserBuilder();

if (userBuilder.isAdmin()){
  console.log(userBuilder)
}else {
  console.log(userBuilder)
}
