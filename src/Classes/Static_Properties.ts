class UserService {
  static db: any; // мы можем указать ключевое слово static, и он станет доступен через имя класса

  static getUser(id: number){
    return UserService.db.findById(id)
  }
  constructor(id: number) {}

  create(){
    UserService.db;
  }
  static {
    UserService.db = 'dd';
  }
}

UserService.db // мы можем на прямую обращаться к методу как к объекту без new UserService
UserService.getUser(1);
const inst = new UserService(1)
inst.create();
