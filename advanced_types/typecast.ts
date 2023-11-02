//Сопоставление типов (Mapped Types)
//Чтобы при работе с объектными типами избежать дублирования полей и переиспользовать существующие, мы можем использовать механизм поиска типов — Lookup Types:
interface ISectionUser {
  username: string;
  password: string;
  userEmail: string;
}

const userCoast: ISectionUser = {
  username: 'ALex',
  password: 'yyy',
  userEmail: 'alex@mail.ru'
}

interface ISectionAdmin {
  username: string;
  role: number;
}

// скопируем все поля
const adminCoast: ISectionAdmin = {
  ...userCoast,
  role: 1
}

// возьмем нужные поля
function userToAdmin(user: ISectionUser): ISectionAdmin {
  return {
    username: user.username,
    role: 1
  }
}
