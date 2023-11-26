const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> { // HTTPResponse может принимать success или failed
  code: number,
  data: T extends 'success' ? string : Error // динамическая подстановка типа в зависимости от Т

}

const conditionalSuc: HTTPResponse<'success'> = {
  code: 200,
  data: 'done'
}

const conditionalErr: HTTPResponse<'failed'> = {
  code: 200,
  data: new Error()
}


class UserConditional {
  id: number
  name: string
}

class UserPerConditional extends UserConditional{
  dbId: string;
}

function getUserConditional(id: number): UserConditional; // перегрузка
function getUserConditional(dbId: string): UserPerConditional; // перегрузка

function getUserConditional(dbIdOrId: string | number): UserConditional | UserPerConditional {
  if (typeof dbIdOrId === 'number') {
    return new UserConditional()
  } else {
    return new UserPerConditional()
  }
}

type UserOrUserPersisted<T extends string | number> = T extends number ? UserConditional : UserPerConditional // принимает джейнерик тип T который либо string или number, если мы передали number то UserConditional если нет то UserPerConditional

function getUserConditional2<T extends string | number>(id: T): UserOrUserPersisted<T> {
  if (typeof id === 'number') {
    return new UserConditional() as UserOrUserPersisted<T> // явное присвоение типа
  } else {
    return new UserPerConditional()
  }
}

getUserConditional2(2)
getUserConditional2('alex')
