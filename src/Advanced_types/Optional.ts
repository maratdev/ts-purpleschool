interface UserLogin {
  login: string;
  password: string;
  email?: string;  // опционально
}

// Можной не использовать email
const userForm: UserLogin = {
  login: 'a@a.ru',
  password: '1234'
}

//---------Необязательный параметр
function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first
  }
  return first * second
}


interface UserLoginPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary'
  }
}

function testPass(user: UserLoginPro) {
  const passType = user.password?.type;
}
