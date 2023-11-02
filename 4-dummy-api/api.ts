const url: string = 'https://dummyjson.com/user';
type CodeStatusAPI = 'GET' | 'POST';

interface IAPIOptions {
  method: CodeStatusAPI,
  headers: {
    'Content-Type': string
  }
}

const options: IAPIOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};


enum HttpStatusCode {
  CONTINUE = 100,
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  BAD_GATEWAY = 502
}


interface IRootUser {
  users: IUserData[]
  total: number
  skip: number
  limit: number
}

interface IUserData {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string | number
  username: string
  password: string
  birthDate: string | number
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: IUserDataHair
  domain: string
  ip: string | number
  address: IUserDataAddress
  macAddress: string | number
  university: string
  bank: IUserDataBank
  company: IUserDataCompany
  ein: string | number
  ssn: string | number
  userAgent: string
}

interface IUserDataHair {
  color: string
  type: string
}

interface IUserDataAddress {
  address: string
  city: string
  coordinates: IUserDataCoordinates
  postalCode: string
  state: string
}

interface IUserDataCoordinates {
  lat: number
  lng: number
}

interface IUserDataBank {
  cardExpire: string | number
  cardNumber: string | number
  cardType: string
  currency: string
  iban: string
}

interface IUserDataCompany {
  address: IUserDataAddress2
  department: string
  name: string
  title: string
}

interface IUserDataAddress2 {
  address: string
  city?: string
  coordinates: IUserDataCoordinates2
  postalCode: string | number
  state: string
}

interface IUserDataCoordinates2 {
  lat: number
  lng: number
}


fetch(url, options)
  .then((res) => {
    if (res.status === HttpStatusCode.CONTINUE) {
      console.log('Данные еще загружаются....')
    }
    if (res.status === HttpStatusCode.NOT_FOUND) {
      throw new Error('Запрошенный ресурс не найден');
    }

    if (res.status === HttpStatusCode.OK) {
      return res.json()
    }

  })
  .then((res: IRootUser) => console.log(res))
  .catch((err): void => {
    if (err.message === HttpStatusCode.BAD_REQUEST) {
      throw new Error('Ошибка запроса на сервер');
    } else if (err.message === HttpStatusCode.BAD_GATEWAY) {
      throw new Error('Сервер получил недопустимый ответ');
    } else {
      throw new Error('Ошибка сервера');
    }
  });
