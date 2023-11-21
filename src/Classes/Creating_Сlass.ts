class UserClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

}

const userClass1 = new UserClass('Alex');
console.log(userClass1)
userClass1.name = 'Bob'

class AdminClass  {
  role: number;   //? отключено  strictPropertyInitialization: false или !- оператор утверждения определённого присваивания

}
